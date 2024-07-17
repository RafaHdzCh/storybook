import React, { useRef, useCallback, useState } from 'react';
import { FC } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { MdCloudUpload } from 'react-icons/md';

interface FileListProps {
  files: File[];
  multipleFiles: boolean;
}

interface TargetBoxProps 
{
  onDrop: (item: { files: any[] }) => void;
  multipleFiles: boolean;
}

export const DragAndDrop: FC<TargetBoxProps> = (props) => 
{
  const [droppedFiles, setDroppedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileDrop = useCallback(
    (item: { files: any[] }) => 
    {
      if (item) 
      {
        const files = item.files;
        setDroppedFiles(files);
      }
    },
    [setDroppedFiles]
  );

  const onFileChange = (ev: React.ChangeEvent<HTMLInputElement>) => 
  {
    if (ev.target.files) 
    {
      const files = Array.from(ev.target.files);
      setDroppedFiles(files);
    }
  };

  const { onDrop, multipleFiles } = props;
  const [{ isOver }, drop] = useDrop(
  {
    accept: [NativeTypes.FILE],
    drop(item: { files: any[] }) 
    {
      if (onDrop) 
      {
        onDrop(item);
      }
      handleFileDrop(item);
    },
    collect: (monitor: DropTargetMonitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const containerClasses = `
    border border-gray-400
    h-60 w-60
    p-8
    text-center
    ${isOver ? 'bg-blue-100' : 'bg-white'}
  `;

  return (
    <div ref={drop} onClick={() => fileInputRef.current?.click()} className={containerClasses}>
      <input type="file" onChange={onFileChange} className="hidden" ref={fileInputRef} multiple={multipleFiles} />
      <div className="">
        <div className="flex justify-center pb-2">
          <MdCloudUpload className="text-4xl" />
        </div>
        <p className="text-center">
          {isOver ? (
            <p>Release to <b>drop files...</b></p>
          ) : (
            <p><b>Choose</b> a file or <b>drag and drop</b> here to upload </p>
          )}
          <FileList files={droppedFiles} multipleFiles={multipleFiles} />
        </p>
      </div>
    </div>
  );
};

const FileList: FC<FileListProps> = ({ files }) => 
{
  const list = files.map((file) => (
    <li key={file.name}>
      {`'${file.name}' - ${((file.size * 0.001) / 1000).toFixed(2)} MB`}
    </li>
  ));

  return <div>{files.length !== 0 ? list : <span></span>}</div>;
};
