export interface GenericAddModalProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleAdd: () => void;
  placeholder?: string;
  buttonText?: string;
}