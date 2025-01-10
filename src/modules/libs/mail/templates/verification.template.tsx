import { Body, Head, Heading, Link, Preview, Section, Tailwind, Text } from '@react-email/components'
import { Html } from '@react-email/html'
import * as React from 'react'

interface VerificationTemplateProps {
	domain: string
	token: string
}

export const VerificationTemplate = ({ domain, token }: VerificationTemplateProps) => {
  const verificationLink = `${domain}/account/verify?token=${token}`
  return (
    <Html>
    <Head />
    <Preview>アカウント認証</Preview>
    <Tailwind>
      <Body className='max-w-2xl mx-auto p-6 bg-slate-50'>
        <Section className='text-center mb-8'>
          <Heading className='text-3xl text-black font-bold'>
            メールアドレスの確認
          </Heading>
          <Text className='text-base text-black'>
            Teastream にご登録いただきありがとうございます！メールアドレスを確認するには、次のリンクにアクセスしてください：
          </Text>
          <Link href={verificationLink} className='inline-flex justify-center items-center rounded-full text-sm font-medium text-white bg-[#18B9AE] px-5 py-2'>
            メールを確認する
          </Link>
        </Section>

        <Section className='text-center mt-8'>
          <Text className='text-gray-600'>
            ご不明な点や問題がございましたら、サポートチームまでお気軽にお問い合わせください：{' '}
            <Link
              href="mailto:help@teastream.ru"
              className="text-[#18b9ae] underline"
            >
              help@teastream.ru
            </Link>.
          </Text>
        </Section>
      </Body>
    </Tailwind>
  </Html>
  )
}
