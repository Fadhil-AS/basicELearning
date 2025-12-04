import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col">
        
        {/* TopNavBar */}
        

        <main className="flex-grow">
          {/* HeroSection */}
          

          {/* Course Grid Section */}
          <section className="py-16 sm:py-20 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-center mb-10">Explore Our Most Popular Courses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Course Card 1 */}
                <div className="flex flex-col gap-3 rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800 transition-transform hover:-translate-y-1">
                  <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9r-C27gR1dGRQxMCpo5OJbjIr2d2nbbh1qVeB1KKol1fDV6fSC7y729Uz1sKoD1YTb8MASWUOw6anQP8N4hMMofVtxektw1MXhm43eK-pbuKWvfkPHF-0hRaRvtDk1FqY2L2LOqLOXU59rSLaqT76gDOR3Rn2Br3LXTuw8S-D0QvBn3-mpDHvkVkrFC41YEYy4KsMQ_H_P4cdr39WYVqINTDMb84ZuPOIVAC-rKKHUFNAK3o4OHsAcujLA-8F1pBB08No3QC_g")' }}></div>
                  <div className="p-4 flex flex-col flex-grow">
                    <p className="text-base font-bold leading-normal flex-grow">The Complete Web Developer Course</p>
                    <p className="text-sm font-normal leading-normal text-text-muted-light dark:text-text-muted-dark mt-1">Dr. Angela Yu</p>
                    <p className="text-lg font-bold leading-normal text-primary mt-2">$99.99</p>
                  </div>
                </div>
                {/* Course Card 2 */}
                <div className="flex flex-col gap-3 rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800 transition-transform hover:-translate-y-1">
                  <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAI1H5fBRvFHFoCqBKSag8EEm0xMB1fdspZo7adUiwnBvhfdkhGIWRSRRplArIsE0IhiQoyjrjox9Ggh1mT3kPV5N3KZLQHxEy9IRNHXL3AFVU30MUJ_fIckYFxNSGyr5LbfdoPabsi2yP1JKXFuDsOldUImE-S0CFytVxdxke5uAhlGcwegC1GGZVholZ36KD83nycyg5VHURbBBfTUMlJyKEKP-J6yumFbWFg5IHf2IPTmcAg0Pv_ZDgYY7Tb2sQYrNzBsryrcQ")' }}></div>
                  <div className="p-4 flex flex-col flex-grow">
                    <p className="text-base font-bold leading-normal flex-grow">UI/UX Design Fundamentals</p>
                    <p className="text-sm font-normal leading-normal text-text-muted-light dark:text-text-muted-dark mt-1">Jane Smith</p>
                    <p className="text-lg font-bold leading-normal text-primary mt-2">$89.99</p>
                  </div>
                </div>
                {/* Course Card 3 */}
                <div className="flex flex-col gap-3 rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800 transition-transform hover:-translate-y-1">
                  <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBz6ne4tVt0zoPaNc-j-DdzBjQ5j2YSvJzSVvVJrmV2vLxrebOnysalWN30x2sK2DEoCAWUjdQN2PXXhAbp3o70AAi-ugU25_gorFZH2HIdxBGgKh6RKaBCxm1M2e2i0sr0YrvV2dg7pP4ojMSldgL_nQXYeArxk1wSnpZynq6vgKbHC9MwLwum66CwECDDXOOiz6LHtW8O9cvZvFPNsNyylpA0xlMNEuLeJl_K1mY9PULa1JWy55bKmWaNCkozdZuzVpdow7tXHg")' }}></div>
                  <div className="p-4 flex flex-col flex-grow">
                    <p className="text-base font-bold leading-normal flex-grow">Introduction to Culinary Arts</p>
                    <p className="text-sm font-normal leading-normal text-text-muted-light dark:text-text-muted-dark mt-1">Gordon Ramsay</p>
                    <p className="text-lg font-bold leading-normal text-primary mt-2">$129.99</p>
                  </div>
                </div>
                {/* Course Card 4 */}
                <div className="flex flex-col gap-3 rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800 transition-transform hover:-translate-y-1">
                  <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJObw2jd5efrkP1D9igjm9ghduwTQT4uMl0zUZ6WgcmALdERQnOT1L75ujTjpiq0ZPu7AsNbaBtj2yHj1Lx-cJzdwbsOdOyDBkChF__AOfOWL4pidbrEJmTZXmDIngIu7wp4rMk3S2MqL5GW5Wd3uqT621pRlNScyJrohiVuEI-6tIdk2UyZBNWybpRMR_b2QLOh_lzZY_z4FRXVzFLk4UjetV12K-6qqMs7AjoYjLm9d0Aqs6RTjdKL558TU4OcweaWoJIW42VA")' }}></div>
                  <div className="p-4 flex flex-col flex-grow">
                    <p className="text-base font-bold leading-normal flex-grow">Acoustic Guitar for Beginners</p>
                    <p className="text-sm font-normal leading-normal text-text-muted-light dark:text-text-muted-dark mt-1">John Mayer</p>
                    <p className="text-lg font-bold leading-normal text-primary mt-2">$79.99</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Value Proposition Section */}
          <section className="py-16 sm:py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-center mb-12">Why Choose E-Learn?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center size-16 rounded-full bg-secondary/20 text-secondary mb-4">
                    <span className="material-symbols-outlined !text-4xl">school</span>
                  </div>
                  <h3 class="text-xl font-bold mb-2">Expert Instructors</h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark">Learn from the best in the industry with our curated selection of experienced professionals.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center size-16 rounded-full bg-secondary/20 text-secondary mb-4">
                    <span className="material-symbols-outlined !text-4xl">schedule</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Flexible Learning</h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark">Access your courses anytime, anywhere, and learn at your own pace on any device.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center size-16 rounded-full bg-secondary/20 text-secondary mb-4">
                    <span className="material-symbols-outlined !text-4xl">workspace_premium</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Get Certified</h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark">Earn a certificate upon completion to showcase your new skills to employers.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 sm:py-24 bg-primary/10 dark:bg-primary/20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold leading-tight tracking-tight mb-4">Ready to Start Learning?</h2>
              <p className="max-w-2xl mx-auto text-lg text-text-muted-light dark:text-text-muted-dark mb-8">Join thousands of learners and take the next step in your personal and professional journey today.</p>
              <button className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-secondary text-white text-base font-bold mx-auto hover:bg-secondary/90">
                <span className="truncate">Sign Up for Free</span>
              </button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 dark:bg-background-dark text-gray-400">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="mb-4 md:mb-0">
                <p className="text-sm">© 2024 E-Learn. All rights reserved.</p>
              </div>
              <div className="flex items-center gap-6">
                <a className="text-sm hover:text-white" href="#">Terms of Service</a>
                <a className="text-sm hover:text-white" href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;