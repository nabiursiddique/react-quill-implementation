import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  ['link', 'image', 'video', 'formula'],

  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }],
  [{ 'direction': 'rtl' }],

  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']
];

const modules = {
  toolbar: toolbarOptions
}

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <h1 className="text-3xl text-center font-bold my-5">
        React Quill Implementation
      </h1>

      <div className="flex justify-evenly mx-5 mt-8">
        {/* Editor */}
        <div className=" w-full h-screen">
          <h1 className="text-xl text-center font-bold mb-3">Editor</h1>
          <div className='mr-5'>
            <ReactQuill
              className='h-[60vh]'
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules}
            />
          </div>
        </div>

        {/* Preview */}
        <div className="h-screen w-full border-l-2 border-black">
          <h1 className="text-xl text-center font-bold mb-3">Preview</h1>
          <div
            className="ql-editor p-4" // Add ql-editor class for proper Quill styling
            dangerouslySetInnerHTML={{ __html: value }}
          />
        </div>

      </div>
    </div>
  )
}

export default App;
