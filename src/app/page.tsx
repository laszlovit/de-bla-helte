import Image from 'next/image';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import NavBar from '@/components/navbar';
import { Heading } from '@/components/text';

function Hero() {
  return (
    <div className="px-6 py-16 sm:py-24 text-center lg:py-32 bg-primary/10 bg-[url(/dot-texture.svg)]">
      <div className="relative">
        <Heading as="h1" className="mx-auto max-w-4xl sm:text-7xl">
          Creating{' '}
          <span className="relative whitespace-nowrap text-blue-600">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">clean spaces</span>
          </span>{' '}
          for a brighter future.
        </Heading>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          We are dedicated to transforming the way people experience clean
          spaces. Our mission is to provide our customers with a superior
          standard of cleanliness that gives them confidence and peace of mind.
        </p>
        <div className="mt-10 flex flex-col gap-x-6 gap-y-4 sm:flex-row justify-center">
          <Button href="#">Get started</Button>
          <Button variant="secondary" href="/pricing">
            See pricing
          </Button>
        </div>
        <div className="hidden 2xl:block 2xl:absolute 2xl:left-10 2xl:top-0">
          <div className="aspect-[1.1891891891891893/1] overflow-hidden relative h-48">
            <Image
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src="/home/hero-1.jpg"
              className="block size-full object-cover rounded-xl shadow-2xl ring-1 ring-black/10"
            />
          </div>
        </div>
        <div className="hidden 2xl:block 2xl:absolute 2xl:left-5 2xl:bottom-0">
          <div className="aspect-[1.5808383233532934/1] overflow-hidden h-32 relative">
            <Image
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src="/home/hero-2.jpg"
              className="block size-full object-cover rounded-xl shadow-2xl ring-1 ring-black/10"
            />
          </div>
        </div>
        <div className="hidden 2xl:block 2xl:absolute 2xl:right-5 2xl:top-0">
          <div className="aspect-[1.5808383233532934/1] overflow-hidden h-32 relative">
            <Image
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src="/home/hero-4.jpg"
              className="block size-full object-cover rounded-xl shadow-2xl ring-1 ring-black/10"
            />
          </div>
        </div>
        <div className="hidden 2xl:block 2xl:absolute 2xl:right-10 2xl:bottom-0">
          <div className="aspect-[1.1891891891891893/1] overflow-hidden h-48 relative">
            <Image
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src="/home/hero-3.jpg"
              className="block size-full object-cover rounded-xl shadow-2xl ring-1 ring-black/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoClouds() {
  return (
    <div className="bg-white py-12 sm:py-16 border-b border-slate-900/10">
      <Container>
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            alt="Transistor"
            src="/home/place-to-logo.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="Reform"
            src="/home/rustik-logo.webp"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <svg
            className="kb-header__logo__large"
            viewBox="0 0 316 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Kræftens Bekæmpelse logo"
          >
            <path
              d="M96.678 8.278a27.788 27.788 0 0 0-39.297 0l-4.888 4.891-4.89-4.89a27.786 27.786 0 1 0 0 39.294l4.89-4.893 4.888 4.891A27.786 27.786 0 0 0 96.678 8.278ZM43.32 43.3a21.732 21.732 0 1 1 0-30.732l4.89 4.889-6.185 6.185-4.9-4.878a12.971 12.971 0 1 0 0 18.35l4.892-4.89 6.185 6.185L43.32 43.3Zm9.173-21.567 6.185 6.186-6.185 6.185-6.186-6.186 6.186-6.185Zm-14.759 6.186-4.889 4.898a6.914 6.914 0 1 1 0-9.781l4.889 4.883Zm54.662 15.381a21.753 21.753 0 0 1-30.722 0l-4.89-4.889 6.185-6.185 4.89 4.89a12.972 12.972 0 1 0 0-18.35l-4.89 4.889-6.186-6.186 4.891-4.889A21.73 21.73 0 1 1 92.396 43.3ZM72.14 23.043a6.915 6.915 0 1 1 0 9.782l-4.89-4.891 4.89-4.89ZM140.728 24.144h-2.996c-.532-4.618-2.654-8.614-6.367-10.363A10.408 10.408 0 0 1 126.996 15v9.144h-2.81V2.29h2.81v9.876c4.557-.344 9.144-5.12 9.705-9.862h2.872c-.499 3.619-2.592 7.177-5.462 9.643 3.621 2.43 5.866 6.392 6.617 12.198ZM154.111 7.79v2.622c-2.342.155-4.433 1.279-5.68 3.027v10.705h-2.658V10.631h-2.804V8.072h5.462v2.184c1.124-1.623 3.089-2.466 5.68-2.466ZM183.443 16.907l-12.165.064c.312 3.093 2.809 4.93 5.524 4.93a5.432 5.432 0 0 0 4.462-2.278l1.874 1.998a8.37 8.37 0 0 1-6.437 2.899c-2.557 0-4.899-1.062-6.392-2.967-1.649 2.09-4.123 2.934-6.462 2.934-4.649 0-8.113-3.4-8.113-8.394s3.464-8.365 8.052-8.365c1.649 0 3.527.563 4.742 1.78V8.102h2.651V9.6a7.544 7.544 0 0 1 5.058-1.872c4.369 0 7.239 3.31 7.239 8.427.004.25-.007.502-.033.752Zm-14.449 2.186a9.343 9.343 0 0 1-.468-3.027V12.66c-.844-1.312-2.497-2.279-4.588-2.279-3.122 0-5.431 2.372-5.431 5.712s2.318 5.742 5.493 5.742a5.755 5.755 0 0 0 4.994-2.746v.004Zm11.61-4.619c-.282-2.497-1.905-4.15-4.4-4.15-2.53 0-4.557 1.622-4.932 4.15h9.332ZM209.153 22.887c-1.093 1.061-2.681 1.499-4.124 1.499-2.903 0-5.12-1.78-5.12-4.994V10.63h-8.519v13.513h-2.648V10.631h-3.402V8.072h3.402V6.447c0-3.024 2.029-4.93 4.868-4.93a6.729 6.729 0 0 1 3.712 1.124l-1.237 2.31a3.582 3.582 0 0 0-2.31-.842c-1.311 0-2.373.81-2.373 2.338v1.625h8.52V3.796h2.653v4.276h5.524v2.559h-5.524v8.489c0 1.967 1.25 2.715 2.681 2.715a3.377 3.377 0 0 0 2.62-1.155l1.277 2.207ZM226.685 16.934h-12.92c.249 3.093 2.934 4.963 5.68 4.963a5.98 5.98 0 0 0 4.93-2.497l1.872 1.998c-1.059 1.53-3.618 3.122-6.804 3.122-5.088 0-8.488-3.34-8.488-8.454 0-4.713 3.245-8.365 7.956-8.365 4.621 0 7.802 3.433 7.802 8.52.002.121.002.37-.028.713Zm-2.902-2.464c-.282-2.56-2.373-4.214-4.87-4.214-2.651 0-4.711 1.686-5.154 4.214h10.024ZM244.408 14.689v9.455h-2.653V14.97c0-2.87-1.78-4.618-4.433-4.618-1.965 0-3.65.936-4.524 2.061v11.732h-2.654V8.062h2.654v1.216a7.965 7.965 0 0 1 4.711-1.56c4.089.01 6.899 2.82 6.899 6.97ZM256.979 19.713c-.031-1.748-1.216-2.154-3.993-2.84-2.778-.687-4.901-1.842-4.901-4.527 0-3.026 2.496-4.65 5.567-4.65 2.527 0 4.274 1.094 5.554 2.935l-2.062 1.715c-.781-1.404-1.81-2.121-3.464-2.121-1.443 0-2.903.686-2.903 2.09 0 1.28.905 1.592 3.299 2.217 2.716.687 5.567 1.623 5.567 5.087 0 3.214-2.373 4.962-5.523 4.962-2.716 0-5.056-1.249-6.392-3.309l2.062-1.715a4.906 4.906 0 0 0 4.33 2.497c1.55.008 2.89-.749 2.859-2.34ZM141.136 47.328c0 3.9-2.903 6.554-7.179 6.554h-9.736V32.028h8.393c3.466 0 6.087 2.435 6.087 5.773a6.003 6.003 0 0 1-1.373 3.711c2.373 1.01 3.808 3.101 3.808 5.817Zm-14.107-6.46h6.928a4.23 4.23 0 0 1 .618.031 3.986 3.986 0 0 0 1.318-2.96c0-1.65-1.062-3.215-3.683-3.215h-5.181v6.144Zm11.266 6.46c0-2.373-1.716-3.775-4.65-3.775h-6.616v7.645h6.616c2.934 0 4.65-1.435 4.65-3.87ZM159.67 46.672h-12.922c.25 3.093 2.934 4.963 5.681 4.963a6.003 6.003 0 0 0 4.932-2.497l1.872 1.998c-1.062 1.528-3.621 3.12-6.804 3.12-5.087 0-8.489-3.339-8.489-8.454 0-4.711 3.246-8.363 7.959-8.363 4.619 0 7.802 3.433 7.802 8.52 0 .12 0 .37-.031.713Zm-2.903-2.474c-.272-2.548-2.371-4.198-4.868-4.198-2.654 0-4.713 1.684-5.155 4.212l10.023-.014ZM177.202 53.883h-2.839c-.563-3.747-2.402-6.774-5.555-7.71a11.65 11.65 0 0 1-3.029.413v7.303h-2.651V31.724h2.645v12.264c4.246-.031 6.617-2.402 7.334-6.186h2.654c-.468 3.027-1.811 5.429-3.932 6.959 3.002 1.726 4.75 5.002 5.373 9.121ZM206.691 46.641l-12.165.062c.313 3.093 2.808 4.932 5.523 4.932a5.432 5.432 0 0 0 4.464-2.278l1.873 1.998a8.38 8.38 0 0 1-6.429 2.9c-2.559 0-4.899-1.06-6.392-2.964-1.65 2.09-4.124 2.934-6.46 2.934-4.649 0-8.115-3.4-8.115-8.394 0-4.963 3.466-8.365 8.041-8.365 1.649 0 3.528.563 4.742 1.78V37.84h2.66v1.497a7.531 7.531 0 0 1 5.056-1.872c4.369 0 7.241 3.299 7.241 8.427.002.25-.011.5-.039.748Zm-14.45 2.186c-.321-.977-.479-2-.468-3.03v-3.4c-.843-1.31-2.497-2.277-4.587-2.277-3.12 0-5.429 2.37-5.429 5.71 0 3.341 2.309 5.743 5.49 5.743a5.76 5.76 0 0 0 4.994-2.746Zm11.611-4.62c-.281-2.496-1.904-4.15-4.4-4.15-2.497 0-4.557 1.621-4.932 4.15h9.332ZM233.992 44.144v9.739h-2.652v-9.458c0-2.808-1.443-4.33-3.711-4.33-1.998 0-3.402.905-4.245 2.029.155.665.228 1.346.218 2.029v9.738h-2.651v-9.466c0-2.808-1.444-4.33-3.712-4.33-1.996 0-3.557.905-4.431 2.062V53.89h-2.651V37.81h2.651v1.216a7.809 7.809 0 0 1 4.683-1.561c1.996 0 3.651.78 4.711 2.155 1.65-1.407 3.528-2.155 5.619-2.155 3.705 0 6.171 2.592 6.171 6.678ZM253.645 45.83c0 4.995-3.464 8.395-8.082 8.395a7.964 7.964 0 0 1-4.714-1.466v7.053h-2.653v-21.97h2.653v1.092a7.951 7.951 0 0 1 4.714-1.468c4.618 0 8.082 3.402 8.082 8.365Zm-2.777 0c0-3.34-2.309-5.71-5.462-5.71-2.029 0-3.682.779-4.557 1.934v7.552c.875 1.155 2.497 1.967 4.557 1.967 3.153 0 5.462-2.373 5.462-5.742ZM271.868 46.672h-12.922c.25 3.093 2.934 4.963 5.681 4.963a6.003 6.003 0 0 0 4.932-2.497l1.872 1.998c-1.062 1.528-3.621 3.12-6.804 3.12-5.087 0-8.489-3.339-8.489-8.454 0-4.711 3.245-8.363 7.959-8.363 4.618 0 7.802 3.433 7.802 8.52 0 .12 0 .37-.031.713Zm-2.903-2.474c-.28-2.548-2.367-4.198-4.868-4.198-2.654 0-4.714 1.684-5.155 4.212l10.023-.014ZM283.565 53.196a4.995 4.995 0 0 1-3.093.967c-2.404 0-4.214-1.443-4.214-4.33v-15.55h-2.809v-2.56h5.462v17.821c0 1.444.749 2.122 1.78 2.122a2.474 2.474 0 0 0 1.715-.687l1.159 2.217ZM294.639 49.45c-.031-1.747-1.216-2.153-3.994-2.84-2.777-.686-4.901-1.84-4.901-4.526 0-3.026 2.499-4.649 5.567-4.649 2.528 0 4.275 1.09 5.555 2.934l-2.062 1.715c-.779-1.404-1.81-2.121-3.464-2.121-1.443 0-2.903.687-2.903 2.09 0 1.281.905 1.592 3.299 2.217 2.716.685 5.555 1.623 5.555 5.087 0 3.214-2.373 4.963-5.524 4.963-2.715 0-5.056-1.25-6.392-3.31l2.062-1.717a4.909 4.909 0 0 0 4.33 2.499c1.565 0 2.907-.75 2.872-2.343ZM315.67 46.672h-12.919c.249 3.093 2.934 4.963 5.68 4.963a5.992 5.992 0 0 0 4.93-2.497l1.874 1.998c-1.062 1.528-3.621 3.12-6.804 3.12-5.087 0-8.489-3.339-8.489-8.454 0-4.711 3.246-8.363 7.959-8.363 4.619 0 7.802 3.433 7.802 8.52a7.08 7.08 0 0 1-.033.713Zm-2.901-2.474c-.28-2.559-2.371-4.212-4.868-4.212-2.654 0-4.713 1.684-5.155 4.212h10.023Z"
              fill="#E8001D"
            ></path>
          </svg>
          <Image
            alt="SavvyCal"
            src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <Image
            alt="Statamic"
            src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </Container>
    </div>
  );
}

function AboutUs() {
  const features = [
    {
      name: 'Flexible scheduling to suit your needs',
    },
    {
      name: 'Eco-friendly and sustainable cleaning product',
    },
    {
      name: 'Skilled and trusted cleaning professionals',
    },
    {
      name: 'Comprehensive cleaning for homes, offices, and more',
    },
  ];

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-gray-900 font-[family-name:var(--font-inter)]">
                About Us
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold text-gray-900 sm:text-5xl font-[family-name:var(--font-outfit)]">
                <span className="relative whitespace-nowrap text-blue-600">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                  </svg>
                  <span className="relative">Delivering Exceptional</span>
                </span>{' '}
                Cleaning Solutions
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                At De Blå Helte, we are committed to providing top-tier cleaning
                services tailored to meet your unique needs. Our expert team
                brings professionalism, reliability, and thorough attention to
                detail to every job, ensuring your spaces are spotless, safe,
                and inviting.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 ">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <div className="flex gap-x-2 items-start font-medium text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        className="size-5 absolute left-1 top-0.5 h-5 w-5 text-primary"
                      >
                        <path
                          stroke="#002E25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M8.5 10.5L12 14l7.5-7.5m-.25 5.5a7.25 7.25 0 1 1-4.007-6.486"
                        />
                      </svg>
                      {feature.name}
                    </div>
                  </div>
                ))}
              </dl>
              <div className="mt-10 ">
                <Button href="#">Learn more</Button>
              </div>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-primary px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                  alt="Photo of our team member"
                  src="/home/about-us.jpg"
                  width={1824}
                  height={1082}
                  className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      {/* <Header /> */}
      <LogoClouds />
      <AboutUs />
    </>
  );
}
