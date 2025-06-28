import { useState } from 'preact/hooks'

const preactLogo = new URL('./assets/preact.svg', import.meta.url);
const parcelLogo = new URL('./assets/parcel.svg', import.meta.url);

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="flex min-h-screen items-center justify-center bg-white text-[#213547] transition-colors dark:bg-[#242424] dark:text-white">
      <div class="mx-auto max-w-screen-xl p-8 text-center">
        <div class="flex justify-center gap-8">
          <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">
            <img
              src={parcelLogo.toString()}
              class="h-24 p-6 transition hover:drop-shadow-[0_0_2em_#e7dacb]"
              alt="Parcel logo"
            />
          </a>
          <a href="https://preactjs.com" target="_blank" rel="noopener noreferrer">
            <img
              src={preactLogo.href}
              class="h-24 p-6 transition hover:drop-shadow-[0_0_2em_#673ab8aa]"
              alt="Preact logo"
            />
          </a>
        </div>
        <h1 class="my-8 text-5xl font-normal leading-tight">Parcel + Preact</h1>
        <div class="p-8">
          <button
            onClick={() => setCount((count) => count + 1)}
            class="rounded-lg border border-transparent bg-[#1a1a1a] px-5 py-2 text-base font-medium text-white transition-colors hover:border-[#646cff] focus:outline focus:outline-4 focus:outline-blue-500 dark:bg-[#1a1a1a] dark:text-white"
          >
            count is {count}
          </button>
          <p class="mt-4 text-sm text-gray-700 dark:text-gray-300">
            Edit <code class="font-mono">src/app.tsx</code> and save to test HMR
          </p>
        </div>
        <p class="mt-2">
          Check out{' '}
          <a
            href="https://preactjs.com/guide/v10/getting-started"
            target="_blank"
            class="font-medium text-[#646cff] transition-colors hover:text-[#747bff]"
            rel="noopener noreferrer"
          >
            preact
          </a>
          , the Getting Started guide
        </p>
        <p class="mt-4 text-sm text-gray-500">Click on the Parcel and Preact logos to learn more</p>
      </div>
    </div>
  )
}
