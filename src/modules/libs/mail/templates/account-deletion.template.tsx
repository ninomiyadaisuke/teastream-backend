import {
	Body,
	Head,
	Heading,
	Html,
	Link,
	Preview,
	Section,
	Tailwind,
	Text
} from '@react-email/components';
import * as React from 'react';

interface AccountDeletionTemplateProps {
	domain: string
}

export function AccountDeletionTemplate({ domain }: AccountDeletionTemplateProps) {
	const registerLink = `${domain}/account/create`

	return (
		<Html>
		    <Head />
	        <Preview>アカウントが削除されました</Preview>
	        <Tailwind>
		        <Body className='max-w-2xl mx-auto p-6 bg-slate-50'>
					<Section className="text-center">
						<Heading className="text-3xl text-black font-bold">
							あなたのアカウントは完全に削除されました
						</Heading>
						<Text className="text-base text-black mt-2">
							あなたのアカウントは TeaStream のデータベースから完全に削除されました。すべてのデータと情報は永久に消去されました。
						</Text>
					</Section>

					<Section className="bg-white text-black text-center rounded-lg shadow-md p-6 mb-4">
						<Text>
							今後、Telegram やメールでの通知は受け取れません。
						</Text>
						<Text>
							もし再度 TeaStream を利用したい場合は、以下のリンクから新規登録してください：
						</Text>
						<Link
							href={registerLink}
							className="inline-flex justify-center items-center rounded-md mt-2 text-sm font-medium text-white bg-[#18B9AE] px-5 py-2 rounded-full"
						>
							TeaStream に登録する
						</Link>
					</Section>

					<Section className="text-center text-black">
						<Text>
							ご利用いただきありがとうございました！またのご利用をお待ちしております。
						</Text>
					</Section>
		        </Body>
	        </Tailwind>
        </Html>
	)
}