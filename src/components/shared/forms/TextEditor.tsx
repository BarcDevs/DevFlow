// noinspection RequiredAttributes

"use client"

import {useRef} from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {useTheme} from '@context/ThemeContext'

type EditorProps = {}

const TextEditor = ({}: EditorProps) => {
    const {activeTheme} = useTheme()
    const editorRef = useRef<any>(null)

    return (
        <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue=""
            init={{
                height: 350,
                menubar: false,
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'codesample'
                ],
                toolbar: 'undo redo | styles | codesample | ' +
                    'bold italic forecolor | alignleft aligncenter |' +
                    'alignright alignjustify | bullist numlist',
                content_style: 'body { font-family:Inter; font-size:16px }',
                skin: activeTheme === 'dark' ? 'oxide-dark' : 'oxide',
                content_css: activeTheme === 'dark' ? 'dark' : 'light'
            }}
        />
    )
}

export default TextEditor