import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined,HeartOutlined,ShoppingCartOutlined, CheckOutlined,DeleteOutlined,   } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Input, Button, Form, Select, Row, Col, Card,  Tag,CheckboxProps,Checkbox } from 'antd';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import UploadComponent from './Components/UploadComponent';

 interface Option {
  name: string;
  values: string[];
  editing: boolean;
}



const { Header, Content, Sider } = Layout;
const { Option } = Select;

const App: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [discountedPrice, setDiscountedPrice] = useState<string>('');
  const [nonDiscountedPrice, setNonDiscountedPrice] = useState<string>('');
  const [buyingPrice, setBuyingPrice] = useState<string>('')

  const [showOptions,setShowOptions] = useState<Boolean>(false)


  const [options, setOptions] = useState<Option[]>([{ name: '', values: [''], editing: true }]);
  const handleOptionChange = (index: number, key: keyof Option, value: string) => {
    const newOptions = [...options];
    newOptions[index][key] = value as never;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, { name: '', values: [''], editing: true }]);
  };

  const handleDeleteOption = (index: number) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const handleAddValue = (index: number) => {
    const newOptions = [...options];
    newOptions[index].values.push('');
    setOptions(newOptions);

    
  };

  const handleDeleteValue = (optionIndex: number, valueIndex: number) => {
    const newOptions = [...options];
    newOptions[optionIndex].values.splice(valueIndex, 1);
    setOptions(newOptions);
  };

  const handleOptionValueChange = (optionName: string, valueIndex: number, value: string) => {
    const updatedOptions: Option[] = options.map(option => {
      if (option.name === optionName) {
        return {
          ...option,
          values: option.values.map((val, idx) => idx === valueIndex ? value : val)
        };
      }
      return option;
    });
    setOptions(updatedOptions);
  };


  const handleToggleEdit = (index: number) => {
    const newOptions = [...options];
    newOptions[index].editing = !newOptions[index].editing;
    setOptions(newOptions);
  };

  const handleToggleOptions: CheckboxProps['onChange'] = (e) => {
    if(e.target.checked){
      setShowOptions(true)
    }
    else{
      setShowOptions(false)

    }
    console.log(`checked = ${e.target.checked}`);
  };






  // Define the generateOptionValueCombinations function
const generateOptionValueCombinations = (options: string[][]): string[][] => {
  if (options.length === 0) return [[]]; // Base case: empty array for no options

  const [firstOption, ...restOptions] = options; // Destructure first option and rest options
  
  const restCombinations = generateOptionValueCombinations(restOptions); // Generate combinations for rest of the options

  const combinations: string[][] = [];
  
  firstOption.forEach(optionValue => {
    restCombinations.forEach(restCombination => {
      combinations.push([optionValue, ...restCombination]); // Add current option value to each combination
    });
  });
  
  return combinations;
};

// Extract values from the options
const optionValues = options.map(option => option.values);

// Generate combinations of values
const combinations = generateOptionValueCombinations(optionValues);

// Print the combinations
console.log(combinations);
  

  return (
   <>
   InterIntel
   </>
  );
};

export default App;
