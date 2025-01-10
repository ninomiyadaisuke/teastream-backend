import { Body, Head, Heading, Link, Preview, Section, Tailwind, Text } from '@react-email/components'
import { Html } from '@react-email/html'
import * as React from 'react'

import type { SessionMetadata } from '@/src/shared/types/session-metadata.types'

interface PasswordRecoveryTemplateProps {
	domain: string
	token: string
	metadata: SessionMetadata
}

export function PasswordRecoveryTemplate({ domain, token, metadata }: PasswordRecoveryTemplateProps) {
	const resetLink = `${domain}/account/recovery/${token}`

	return (
		<Html>
			<Head />
			<Preview>パスワードリセット</Preview>
			<Tailwind>
				<Body className='max-w-2xl mx-auto p-6 bg-slate-50'>
					<Section className='text-center mb-8'>
						<Heading className='text-3xl text-black font-bold'>
							パスワードリセット
						</Heading>
						<Text className="text-black text-base mt-2">
							あなたのアカウントのパスワードリセットをリクエストしました。
						</Text>
						<Text className="text-black text-base mt-2">
							新しいパスワードを作成するには、以下のリンクをクリックしてください：
						</Text>
						<Link href={resetLink} className='inline-flex justify-center items-center rounded-full text-sm font-medium text-white bg-[#18B9AE] px-5 py-2'>
							パスワードをリセット
						</Link>
					</Section>

					<Section className='bg-gray-100 rounded-lg p-6 mb-6'>
						<Heading
							className='text-xl font-semibold text-[#18B9AE]'
						>
							リクエスト情報：
						</Heading>
						<ul className="list-disc list-inside text-black mt-2">
							<li>🌍 ロケーション: {metadata.location.country}, {metadata.location.city}</li>
							<li>📱 オペレーティングシステム: {metadata.device.os}</li>
							<li>🌐 ブラウザ: {metadata.device.browser}</li>
							<li>💻 IPアドレス: {metadata.ip}</li>
						</ul>
						<Text className='text-gray-600 mt-2'>
							このリクエストを行っていない場合は、このメッセージを無視してください。
						</Text>
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
