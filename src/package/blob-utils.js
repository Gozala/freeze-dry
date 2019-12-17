// External dependencies are imported via this file, to ease remapping them in setups without npm.
// @flow strict
export const blobToDataURL = async (blob/*:Blob*/)/*:Promise<string>*/ => {
  const text = await blob.text()
  const encodedText = btoa(text)
  return `data:${blob.type};base64,${encodedText}`
}
