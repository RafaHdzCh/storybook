import React, { useRef, useCallback, useState } from 'react';
import { FC } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { BsCloudArrowUp } from "react-icons/bs";

interface FileListProps {
  files: File[];
  multipleFiles: boolean;
}

interface TargetBoxProps {
  onDrop: (item: { files: any[] }) => void;
  multipleFiles: boolean;
  bgColor: string;
  bgHover: string;
  textColor: string;
  iconColor: string;
  borderColor: string;
}

export const DragAndDrop: FC<TargetBoxProps> = ({
  onDrop,
  multipleFiles,
  bgColor,
  bgHover,
  textColor,
  iconColor,
  borderColor
}) => {
  const [droppedFiles, SetDroppedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileDrop = useCallback(
    (item: { files: any[] }) => {
      if (item) {
        const files = item.files;
        SetDroppedFiles(files);
      }
    }, [SetDroppedFiles]
  );

  const onFileChange = (ev: React.ChangeEvent<HTMLInputElement>) => 
  {
    if (ev.target.files) 
    {
      const files = Array.from(ev.target.files);
      SetDroppedFiles(files);
    }
  };

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
    collect: (monitor: DropTargetMonitor) => (
    {
      isOver: monitor.isOver(),
    }),
  });

  const containerClasses = `
    h-60 
    w-60 
    p-2 
    flex 
    items-center 
    justify-center 
    text-center
    border-2 
    border-dashed 
    
  `;

  return (
    <div 
      ref={drop} 
      onClick={() => fileInputRef.current?.click()} 
      className={containerClasses}
      style={{ backgroundColor: isOver ? bgHover : bgColor, borderColor: borderColor }}
      >
      <input
        type="file"
        onChange={onFileChange}
        className="hidden"
        ref={fileInputRef}
        multiple={multipleFiles}
        
      />
      <div className="flex flex-col items-center">
        <div className="flex justify-center pb-2">
          <BsCloudArrowUp 
            className="text-4xl" 
            style={{ color: iconColor }} 
          />
        </div>
        <p style={{ color: textColor }}>
          {isOver ? (
            <span>Release to <b>drop files...</b></span>
          ) : (
            <span><b>Choose</b> a file or <b>drag and drop</b> here to upload</span>
          )}
        </p>
        <FileList 
          files={droppedFiles}
          multipleFiles={multipleFiles} 
        />
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

  return <ul>{files.length !== 0 ? list : <span>No files selected</span>}</ul>;
};
