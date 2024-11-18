import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Heading } from '@/components/text'

export default function CallToAction({
  title,
  description,
  buttonText,
  buttonHref,
  secondaryButtonText,
  secondaryButtonHref,
}: {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}) {
  return (
    <section className="relative overflow-hidden bg-primary/10 bg-[url(/dot-texture.svg)] py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Heading>{title || 'Get started today'}</Heading>
          <p className="mt-4 text-lg tracking-tight">
            {description ||
              'It’s time to take control of your books. Buy our software so you can focus on something else'}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-x-6 gap-y-4 sm:flex-row">
            <Button href={buttonHref || '/kontakt'}>
              {buttonText || 'Get a free quote'}
            </Button>
            <Button
              variant="secondary"
              href={secondaryButtonHref || 'tel:+4570604615'}
            >
              {secondaryButtonText || 'Call us now'}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
