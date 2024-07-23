import * as React from "react";
import * as ReactIcons from "@fluentui/react-icons";
import * as RC from "@fluentui/react-components";

const items = [
  {
    file: { label: "Meeting notes", icon: <ReactIcons.DocumentRegular /> },
    author: { label: "Max Mustermann", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: {
      label: "You edited this",
      icon: <ReactIcons.EditRegular />,
    },
  },
  {
    file: { label: "Thursday presentation", icon: <ReactIcons.FolderRegular /> },
    author: { label: "Erika Mustermann", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <ReactIcons.OpenRegular />,
    },
  },
  {
    file: { label: "Training recording", icon: <ReactIcons.VideoRegular /> },
    author: { label: "John Doe", status: "away" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <ReactIcons.OpenRegular />,
    },
  },
  {
    file: { label: "Purchase order", icon: <ReactIcons.DocumentPdfRegular /> },
    author: { label: "Jane Doe", status: "offline" },
    lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    lastUpdate: {
      label: "You shared this in a Teams chat",
      icon: <ReactIcons.PeopleRegular />,
    },
  },
];

const columns = [
  { columnKey: "file", label: "File" },
  { columnKey: "author", label: "Author" },
  { columnKey: "lastUpdated", label: "Last updated" },
  { columnKey: "lastUpdate", label: "Last update" },
];

export const Table = () => {
  return (
    <RC.Table arial-label="Default table" style={{ minWidth: "510px" }}>
      <RC.TableHeader>
        <RC.TableRow>
          {columns.map((column) => (
            <RC.TableHeaderCell key={column.columnKey}>
              {column.label}
            </RC.TableHeaderCell>
          ))}
        </RC.TableRow>
      </RC.TableHeader>
      <RC.TableBody>
        {items.map((item) => (
          <RC.TableRow key={item.file.label}>
            <RC.TableCell>
              <RC.TableCellLayout media={item.file.icon}>
                {item.file.label}
              </RC.TableCellLayout>
            </RC.TableCell>
            <RC.TableCell>
              <RC.TableCellLayout
                media={
                  <RC.Avatar
                    aria-label={item.author.label}
                    name={item.author.label}
                    badge={{
                      status: item.author.status as RC.PresenceBadgeStatus,
                    }}
                  />
                }
              >
                {item.author.label}
              </RC.TableCellLayout>
            </RC.TableCell>
            <RC.TableCell>{item.lastUpdated.label}</RC.TableCell>
            <RC.TableCell>
              <RC.TableCellLayout media={item.lastUpdate.icon}>
                {item.lastUpdate.label}
              </RC.TableCellLayout>
            </RC.TableCell>
          </RC.TableRow>
        ))}
      </RC.TableBody>
    </RC.Table>
  );
};