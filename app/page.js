"use client";
import React, { useEffect, useRef, useState } from "react";
import { Poppins } from "next/font/google";
import * as THREE from "three";
import {
  simulationVertexShader,
  simulationFragmentShader,
  renderVertexShader,
  renderFragmentShader,
} from "./shaders.js";
import BioSection from "./sections/BioSection";
import StatementSection from "./sections/StatementSection";
import NavBar from "./navbar/NavBar";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Home() {
  const mountRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const estTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
      const timeString = estTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'America/New_York'
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const mount = mountRef.current;
    if (!mount) return;

    // Core scenes and camera
    const scene = new THREE.Scene();
    const simScene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Mouse & frame state
    const mouse = new THREE.Vector2();
    let frame = 0;
    let isUserMoved = false;

    // Timer to restart rain when user stops moving
    let moveTimeout;
    const startRain = () => { isUserMoved = false; };
    const resetRainTimer = () => {
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(startRain, 5000); // after 2s inactivity, resume rain
    };

    // Render targets
    let width = mount.clientWidth * window.devicePixelRatio;
    let height = mount.clientHeight * window.devicePixelRatio;
    const options = {
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      stencilBuffer: false,
      depthBuffer: false,
    };
    let rtA = new THREE.WebGLRenderTarget(width, height, options);
    let rtB = new THREE.WebGLRenderTarget(width, height, options);

    // Simulation shader material
    const simMaterial = new THREE.ShaderMaterial({
      uniforms: {
        textureA: { value: null },
        mouse: { value: mouse },
        resolution: { value: new THREE.Vector2(width, height) },
        time: { value: 0 },
        frame: { value: 0 },
        rippleRadius: { value: 0.02 },
      },
      vertexShader: simulationVertexShader,
      fragmentShader: simulationFragmentShader,
    });

    // Render shader material
    const renderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        textureA: { value: null },
        textureB: { value: null },
      },
      vertexShader: renderVertexShader,
      fragmentShader: renderFragmentShader,
      transparent: true,
    });

    // Quad geometry
    const planeGeo = new THREE.PlaneGeometry(2, 2);
    const simQuad = new THREE.Mesh(planeGeo, simMaterial);
    const renderQuad = new THREE.Mesh(planeGeo, renderMaterial);
    simScene.add(simQuad);
    scene.add(renderQuad);

    // Text canvas & texture
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", { alpha: true });
    const textTexture = new THREE.CanvasTexture(canvas);
    textTexture.minFilter = THREE.LinearFilter;
    textTexture.magFilter = THREE.LinearFilter;
    textTexture.format = THREE.RGBAFormat;

    function drawText() {
      width = mount.clientWidth * window.devicePixelRatio;
      height = mount.clientHeight * window.devicePixelRatio;
      canvas.width = width;
      canvas.height = height;
      ctx.fillStyle = "#279cfb";
      ctx.fillRect(0, 0, width, height);
      const fontSize = Math.round(300 * window.devicePixelRatio);
      ctx.fillStyle = "#EBEEE8";
      ctx.font = `bold ${fontSize}px Poppins`;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      const topPadding = Math.round(70 * window.devicePixelRatio);
      ctx.fillText("alex klein", width / 2, topPadding);
      // const subtitleY = topPadding + fontSize + Math.round(10 * window.devicePixelRatio);
      // ctx.font = `normal ${Math.round(40 * window.devicePixelRatio)}px Poppins`;
      // ctx.fillText(
      //   "forever learning, dreaming, and creating",
      //   width / 2,
      //   subtitleY
      // );
      textTexture.needsUpdate = true;
    }

    drawText();

    // Handle resizing
    const handleResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      drawText();
      simMaterial.uniforms.resolution.value.set(
        mount.clientWidth * window.devicePixelRatio,
        mount.clientHeight * window.devicePixelRatio
      );
      rtA.setSize(mount.clientWidth * window.devicePixelRatio, mount.clientHeight * window.devicePixelRatio);
      rtB.setSize(mount.clientWidth * window.devicePixelRatio, mount.clientHeight * window.devicePixelRatio);
    };
    window.addEventListener("resize", handleResize);

    // Mouse interactions
    renderer.domElement.addEventListener("mousemove", (e) => {
      isUserMoved = true;
      resetRainTimer();
      const rect = mount.getBoundingClientRect();
      // Convert to canvas pixel coordinates
      mouse.x = (e.clientX - rect.left) * window.devicePixelRatio;
      // Invert y-axis: bottom of canvas is y=0 in simulation
      mouse.y = (rect.height * window.devicePixelRatio) - (e.clientY - rect.top) * window.devicePixelRatio;
    });
    renderer.domElement.addEventListener("mouseleave", () => {
      mouse.set(0, 0);
      resetRainTimer();
    });

    // Animation loop
    let animationId;
    const animate = () => {
      // Switch ripple size based on user interaction
      simMaterial.uniforms.rippleRadius.value = isUserMoved ? 0.02 : 0.1;

      // Rain simulation before user moves mouse
      if (!isUserMoved) {
          mouse.x = Math.random() * width;
          mouse.y = Math.random() * height;
      }
      simMaterial.uniforms.frame.value = frame++;
      simMaterial.uniforms.time.value = performance.now() / 1000;
      simMaterial.uniforms.textureA.value = rtA.texture;
      renderer.setRenderTarget(rtB);
      renderer.render(simScene, camera);
      renderMaterial.uniforms.textureA.value = rtB.texture;
      renderMaterial.uniforms.textureB.value = textTexture;
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);
      [rtA, rtB] = [rtB, rtA];
      // Only inject when cursor moves: reset after each frame
      // mouse.set(0, 0);  <-- This line removed as per instructions
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      mount.removeChild(renderer.domElement);
      rtA.dispose();
      rtB.dispose();
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    let prevWidth = window.innerWidth;
    const handleResizeReload = () => {
      if (window.innerWidth !== prevWidth) {
        window.location.reload();
      }
    };
    window.addEventListener('resize', handleResizeReload);
    return () => window.removeEventListener('resize', handleResizeReload);
  }, []);

  if (isMobile) {
    return (
      <main className="w-screen">
        <section className="h-screen relative bg-[#279cfb]">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl md:text-6xl font-bold text-[#EBEEE8] font-poppins">alex klein</h1>
          </div>
          <div className="absolute bottom-0 left-0 p-8 z-50 text-[#EBEEE8]">
            <div className="grid grid-rows-2">
              <div className="text-2xl md:text-3xl font-bold">forever learning, dreaming, creating</div>
              <div className="text-2xl md:text-3xl font-bold pl-8 md:pl-28">and always making waves</div>
            </div>
          </div>
        </section>
        <BioSection />
      </main>
    );
  }
  return (
    <main className="w-screen">
      <NavBar />
      <section className="h-screen relative">
        <div ref={mountRef} className="absolute inset-0" />
        <div className="absolute bottom-0 left-0 p-8 z-50 text-[#EBEEE8]">
          <div className="grid grid-rows-2">
            <div className="text-3xl font-bold">forever learning</div>
            <div className="text-3xl font-bold pl-29">& making waves</div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-8 z-50 text-[#EBEEE8]">
          <div className="grid grid-rows-2">
            <div className="text-2xl font-bold text-right">florida</div>
            <div className="text-3xl font-bold text-right">{currentTime}</div>
          </div>
        </div>
      </section>
      <BioSection />
      <StatementSection />
    </main>
  );
}
