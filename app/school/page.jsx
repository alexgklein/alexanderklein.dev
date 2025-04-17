export default function SchoolPage() {
    return (
      <main className="min-h-screen py-8">
        {/* Intro / Hero */}
        <section className="mb-4">
          {/* Big heading */}
          <h1 className="text-4xl md:text-8xl font-bold leading-24 mb-4">
            <span className="text-blue">university</span> of <span className="text-orang">florida</span>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                    a.k.a <span className="text-greeen">the swamp</span>.
                </div>
                <div className="text-base md:text-2xl mt-2 sm:mt-0">
                    <span>"go gators"</span>
                </div>
            </div>
          </h1>
        </section>
  
        {/* Independent Developer + Availability */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-8 md:gap-8 items-start">
            <h2 className="text-3xl font-semibold">
              computer science
            </h2>
            <h2 className="text-3xl font-semibold">
                graduating may 2026
            </h2>
          </div>
  
          {/* Lead text */}
          <div className="grid grid-cols-1 md:grid-cols-8 md:gap-8 items-start mt-12">
            <div className="col-span-1">

            </div>
            <div className="space-y-8 col-span-3">
                <p className="text-3xl">
                    15+ years in the field and counting.
                </p>
                <p className="text-3xl">
                    15+ years in the field and counting.
                </p>
                <p className="text-3xl">
                    15+ years in the field and counting.
                </p>
            </div>
          </div>
  
        </section>
        
        {/* Neu Info */}
        {/* <div className="mt-8">
        <p className="font-semibold">( neu n dex )</p>
        <p className="text-sm">
            `neu` = new in german<br />
            homophone: noindex
        </p>
        </div> */}
  
        {/* Accolades */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <h3 className="text-2xl font-bold mb-4">accolades</h3>
            <div className="space-y-2">
              <div>10x SOTD, DEV awwwards</div>
              <div>5x mobile excellence</div>
              <div>3x site of the month nominee</div>
              <div>4x commarts webpicks</div>
              <div>occasional codrops author</div>
              <div>awwwards academy instructor</div>
              <div>5x independent of the year nominee</div>
              <div>2x developer site of the year nominee</div>
              <div>1x e-Commerce of the year nominee</div>
            </div>
          </div>
        </section>
  
        {/* Publications */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <h3 className="text-2xl font-bold mb-4">publications</h3>
            <div className="space-y-2">
              <a
                href="https://tympanus.net/codrops/2024/12/05/case-study-isabel-moranta-portfolio-2024/"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                codrops case study – isabel moranta
              </a>
              <a
                href="https://www.commarts.com/webpicks/isabel-moranta"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                commarts webpicks – isabel moranta
              </a>
              <a
                href="https://www.awwwards.com/portfolio-of-yannis-yannakopoulos-v2.html"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                awwwards case study – @
              </a>
              <a
                href="https://www.awwwards.com/portfolio-of-constantinos-haritos.html"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                awwwards case study – haritos
              </a>
              <a
                href="https://www.commarts.com/webpicks/anti"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                commarts webpicks – anti
              </a>
              <a
                href="https://www.commarts.com/webpicks/sofia-papadopoulou"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                commarts webpicks – sofia papadopoulou
              </a>
              <a
                href="https://tympanus.net/codrops/2020/02/24/audio-based-image-distortion-effects-with-webgl/"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                audio-based image distortion effects with webgl
              </a>
              <a
                href="https://tympanus.net/codrops/2018/03/06/creative-audio-visualizers/"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                creative audio visualizers
              </a>
              <a
                href="https://tympanus.net/codrops/2017/10/10/liquid-distortion-effects/"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                liquid distortion effects
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }
  