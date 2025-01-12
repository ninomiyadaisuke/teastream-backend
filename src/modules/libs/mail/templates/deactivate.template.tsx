import type { SessionMetadata } from '@/src/shared/types/session-metadata.types'
import { Body, Head, Heading, Link, Preview, Section, Tailwind, Text } from '@react-email/components'
import { Html } from '@react-email/html'
import * as React from 'react'

interface DeactivateTemplateProps {
	token: string
	metadata: SessionMetadata
}

export function DeactivateTemplate({ token, metadata }: DeactivateTemplateProps) {
	return (
		<Html>
			<Head />
			<Preview>アカウントの無効化</Preview>
			<Tailwind>
				<Body className='max-w-2xl mx-auto p-6 bg-slate-50'>
					<Section className='text-center mb-8'>
						<Heading className='text-3xl text-black font-bold'>
							アカウント無効化リクエスト
						</Heading>
						<Text className="text-black text-base mt-2">
							あなたは <b>TeaStream</b> プラットフォームでアカウントの無効化をリクエストしました。
						</Text>
					</Section>

					<Section className='bg-gray-100 rounded-lg p-6 text-center mb-6'>
						<Heading className='text-2xl text-black font-semibold'>
							確認コード:
						</Heading>
						<Heading className='text-3xl text-black font-semibold'>
							{token}
						</Heading>
						<Text className='text-black'>
							このコードは 5 分間有効です。
						</Text>
					</Section>

					<Section className='bg-gray-100 rounded-lg p-6 mb-6'>
						<Heading
							className='text-xl font-semibold text-[#18B9AE]'
						>
							リクエスト情報:
						</Heading>
						<ul className="list-disc list-inside text-black mt-2">
							<li>🌍 場所: {metadata.location.country}, {metadata.location.city}</li>
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