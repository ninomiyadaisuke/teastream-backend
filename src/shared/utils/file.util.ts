import { ReadStream } from 'fs'

export function validateFileFormat(
  filename: string, // チェックするファイル名（例: "image.png"）
  allowedFileFormats: string[] // 許可された拡張子リスト（例: ["png", "jpg", "jpeg"]）
) {
  // ① ファイル名をドット (.) で分割し、拡張子を取得
  const fileParts = filename.split('.')
  const extension = fileParts[fileParts.length - 1]

  // ② 許可リストに拡張子が含まれているかを判定
  return allowedFileFormats.includes(extension)
}

export async function validateFileSize(
  fileStream: ReadStream, // ファイルのストリーム
  allowedFileSizeInBytes: number // 許可される最大ファイルサイズ（バイト単位）
) {
  return new Promise((resolve, reject) => {
    let fileSizeInBytes = 0;

    // ① ストリームのデータが受信されるたびに、サイズを加算
    fileStream.on("data", (data: Buffer) => {
      fileSizeInBytes = data.byteLength; 
    })

    // ② ストリームの読み込みが完了したら、サイズをチェック
    .on("end", () => {
      resolve(
        fileSizeInBytes <= allowedFileSizeInBytes // 許可サイズ内かどうか
      );
    })

    // ③ ストリーム処理中にエラーが発生した場合は `reject` する
    .on("error", error => {
      reject(error);
    });
  });
}