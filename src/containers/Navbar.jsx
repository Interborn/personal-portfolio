import { useEffect, useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import ScrollProgress from '../components/ScrollProgress';
import headshot from '../assets/rocks.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleModalOpen = () => {
        setIsModalOpen(true);
      };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const downloadResume = () => {
        const resumeUrl = '../assets/resume.pdf';
        const fileName = 'CharlesKResume.pdf';
        saveAs(resumeUrl, fileName); // trigger file download using file-saver
    }
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isAtTop, setIsAtTop] = useState(true)
    
    useEffect(() => {
        function handleScroll() {
          if (window.pageYOffset === 0) {
            setIsAtTop(true)
          } else {
            setIsAtTop(false)
          }
        }
  
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
      }, [])

  return (
    <div>
      <header className="bg-transparent w-screen fixed bottom-0 hidden md:block z-[999]">
        <nav className={`overflow-hidden px-6 sm:px-0 py-3 sm:py-0 flex sm:flex-col ${isAtTop ? 'transition-[0.3s] max-w-[100%] mt-0 rounded-none group mx-auto flex items-center justify-between py-0 bg-gradient-to-bl from-violet-500 via-violet-40 to-violet-500 hover:scale-[1.05] hover:pb-1 group' : 'transition-[0.3s] mb-2 group mx-auto flex max-w-[90%] items-center justify-between mt-3 py-0 bg-gradient-to-bl from-violet-500 via-violet-450 to-violet-500 shadow-lg rounded-lg'}`} aria-label="Global">
          <div className="md:hidden flex w-full lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 inline-flex flex-row-reverse items-center justify-start">
              <span className="sr-only">Dylan Safra</span>
              <img className="mr-2 h-8 w-auto" src={headshot} alt="Dylan Safra Headshot" />
            </a>
          </div>
          <ScrollProgress />
          <Popover.Group className="hidden lg:flex lg:gap-x-24 mt-3 mb-3">
            <a href="/#projects" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              <div className="icon h-4 mr-1"/> Projects
            </a>
            <a href="/#education" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              <div className="icon h-4 mr-1"/> Education
            </a>
            <a href="/#experience" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              <div className="icon h-4 mr-1"/> Experience
            </a>
          <a href="src/assets/DylanSafra.pdf" download="DylanSafra.pdf" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              <div className="icon h-4 mr-1"/> Download Resume
          </a>
            <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              <div className="icon h-4 mr-1"/> Contact Me
            </a>
          </Popover.Group>
          <div className="hidden lg:justify-end">
            <a href="/blog" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              <div className="icon h-4 mr-1"/> Read My Blog <span aria-hidden="true" className="ml-2">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
      <header className="bg-transparent w-screen fixed top-0 block md:hidden z-[999]">
        <nav className={`overflow-hidden px-6 sm:px-0 py-3 sm:py-0 flex sm:flex-col ${isAtTop ? 'shadow-[0px_-15px_20px_black] transition-[0.3s] max-w-[100%] mt-0 rounded-none group mx-auto flex items-center justify-between py-0 bg-gradient-to-bl from-neutral-100 via-white to-neutral-100' : 'transition-[0.3s] group mx-auto flex max-w-[90%] items-center justify-between mt-3 py-0 bg-gradient-to-bl from-neutral-100 via-white to-neutral-100 shadow-lg rounded-lg'}`} aria-label="Global">
          <div className="md:hidden flex w-full lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 inline-flex flex-row-reverse items-center justify-start">
              <span className="sr-only">Charles Knapp</span>
              <img className="mr-2 h-8 w-auto" src={headshot} alt="Charles Knapp Headshot" />
            </a>
          </div>
          <div className="w-full flex lg:hidden justify-end">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="icon h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-24 mt-3 mb-3">
            <a href="/#experience" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              <div className="icon h-4 mr-1"/> Experience
            </a>
            <a href="/#education" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              <div className="icon h-4 mr-1"/> Education
            </a>
          <a href="src/assets/resume.pdf" download="KnappCharles.pdf" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              <div className="icon h-4 mr-1"/> Download Resume
          </a>
            <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              <div className="icon h-4 mr-1"/> Contact Me
            </a>
          </Popover.Group>
          <div className="hidden lg:justify-end">
            <a href="/blog" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              <div className="icon h-4 mr-1"/> Read My Blog <span aria-hidden="true" className="ml-2">&rarr;</span>
            </a>
          </div>
          <ScrollProgress />
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-[805]" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-[800] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-0 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Charles Knapp</span>
                <img
                  className="h-8 w-auto"
                  src="https://camo.githubusercontent.com/6034b50b998215c6583d83c911e84f0301c59844840c19d6503e22ef794d358d/68747470733a2f2f692e6962622e636f2f35365274624e4a2f636b2d627562626c652e706e67"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <div className="icon h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root text-center text-3xl mt-24">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a href="/#experience" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Experience
                  </a>
                  <a href="/#education" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Education
                  </a>
                  <a href="src/assets/resume.pdf" download="KnappCharles.pdf" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Resume
                  </a>
                  <a href="/contact" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Contact Me
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}