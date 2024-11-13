import { render, screen, fireEvent } from '@testing-library/react';
import AddNoteCard from '../Components/NoteCard/AddNoteCard';


jest.mock('@mui/icons-material/CheckBox', () => () => <div>CheckBoxIcon</div>);
jest.mock('@mui/icons-material/Brush', () => () => <div>BrushIcon</div>);
jest.mock('@mui/icons-material/Image', () => () => <div>ImageIcon</div>);
jest.mock('@mui/icons-material/NotificationsNone', () => () => <div>NotificationsNoneIcon</div>);
jest.mock('@mui/icons-material/PersonAdd', () => () => <div>PersonAddIcon</div>);
jest.mock('@mui/icons-material/Palette', () => () => <div>PaletteIcon</div>);
jest.mock('@mui/icons-material/Archive', () => () => <div>ArchiveIcon</div>);
jest.mock('@mui/icons-material/MoreVert', () => () => <div>MoreVertIcon</div>);
jest.mock('@mui/icons-material/Undo', () => () => <div>UndoIcon</div>);
jest.mock('@mui/icons-material/Redo', () => () => <div>RedoIcon</div>);

test('displays expanded note on click', () => {
  render(<AddNoteCard />);
  fireEvent.click(screen.getByPlaceholderText(/Take a note.../i));  // Expand note
  expect(screen.getByPlaceholderText(/Title/i)).toBeInTheDocument();  // Check title input
  expect(screen.getByText(/Close/i)).toBeInTheDocument();  // Check close button
});





test('collapses note on close button click', () => {
  render(<AddNoteCard />);
  fireEvent.click(screen.getByPlaceholderText(/Take a note.../i));  // Expand note
  fireEvent.click(screen.getByText(/Close/i));  // Close note
  expect(screen.getByPlaceholderText(/Take a note.../i)).toBeInTheDocument();  // Check collapsed input
});
