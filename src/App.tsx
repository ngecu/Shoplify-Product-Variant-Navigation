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

    <Layout>
      <>Hello WOrld</>
        <Header style={{ background: "#D21812", color: 'white' }}>
      <Row align="middle">
        <Col flex={1}>
          <Row align="middle">
            <img src="https://icon2.cleanpng.com/20240311/wpi/transparent-make-up-woman-with-face-painted-pink-and-black-1710842240983.webp" alt="" style={{ width: '50px', marginRight: '10px',borderRadius:"50%" }} />
            <h3 style={{ margin: 0 }}>BEAUTY S.</h3>
          </Row>
        </Col>
 

        <Col flex={4}>
          <Row align="middle" style={{display:"flex"}}>
            <Input placeholder="Search Product..."   />

          </Row>
        </Col>
        <Col flex={1} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Row align="middle">
            <Col style={{ display: 'flex', alignItems: 'center' }}>
              <Button type="text" icon={<UserOutlined />} style={{ color: 'white' }} />
              <span style={{ color: 'white' }}>My Account</span>
            </Col>
            <Col style={{ display: 'flex',  alignItems: 'center', marginLeft: '20px' }}>
              <Button type="text" icon={<ShoppingCartOutlined />} style={{ color: 'white' }} />
              <span style={{ color: 'white' }}>Cart</span>
            </Col>
            <Col style={{ display: 'flex',  alignItems: 'center', marginLeft: '20px' }}>
              <Button type="text" icon={<HeartOutlined />} style={{ color: 'white' }} />
              <span style={{ color: 'white' }}>Wishlist</span>
            </Col>
            <Col style={{ display: 'flex',  alignItems: 'center', marginLeft: '20px' }}>
              <Button type="text" icon={<CheckOutlined />} style={{ color: 'white' }} />
              <span style={{ color: 'white' }}>Checkout</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
      <Layout style={{minHeight:"90vh"}}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="products" icon={<LaptopOutlined />}>
              Products
            </Menu.Item>
            <Menu.Item key="categories" icon={<NotificationOutlined />}>
              Categories
            </Menu.Item>
            <Menu.Item key="users" icon={<UserOutlined />}>
              Users
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Products</Breadcrumb.Item>
            <Breadcrumb.Item>Add Product</Breadcrumb.Item>

          </Breadcrumb>
          <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
            <div>
              
              <Form 
              layout="vertical"
              >
<Card className='my-2'>
              <Form.Item label="Product Title">
        <Input placeholder="Enter product title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Item>

  
      <Form.Item label="Product Description">
        <ReactQuill theme="snow" value={description} onChange={setDescription} />
      </Form.Item>
      </Card>

      <Card className='my-2' title="Images">
      <Form.Item>
      <UploadComponent/>
      </Form.Item>
    </Card>

    <Card className='my-2' title="Pricing">
    <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item label="Discounted Price">
              <Input placeholder="Enter discounted price" value={discountedPrice} onChange={(e) => setDiscountedPrice(e.target.value)} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Non-Discounted Price">
              <Input placeholder="Enter non-discounted price" value={nonDiscountedPrice} onChange={(e) => setNonDiscountedPrice(e.target.value)} />
            </Form.Item>
          </Col>
        </Row>

        {/* Buying Price (Hidden) */}
        <Form.Item label="Buying Price" style={{ display: 'none' }}>
          <Input placeholder="Enter buying price" value={buyingPrice} onChange={(e) => setBuyingPrice(e.target.value)} />
        </Form.Item>

    </Card>

    <Card className='my-2' title="Options">
    <Checkbox onChange={handleToggleOptions}>This Product Has Options like Size or Color</Checkbox>        
      </Card>
      {showOptions && 
      <>
      <Card>
      {options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      
                        {option.editing ?
                        <>
                          <Form.Item label={`Option  Name`} >
                            <Input
                              placeholder={`Enter option ${optionIndex + 1} name`}
                              value={option.name}
                              onChange={(e) => handleOptionChange(optionIndex, 'name', e.target.value)}
                              addonAfter={<Button type="text" icon={<DeleteOutlined />} onClick={() => handleDeleteOption(optionIndex)} danger />}
                            />
                          </Form.Item>
                          <br />
                          <label>Option Values</label>
                          {option.values.map((value, valueIndex) => (
                            <Form.Item key={valueIndex} >
                              <Input
                                placeholder={`Enter value ${valueIndex + 1}`}
                                value={value}
                                onChange={(e) => handleOptionValueChange(option.name, valueIndex, e.target.value)}
                                addonAfter={<Button type="text" icon={<DeleteOutlined />} onClick={() => handleDeleteValue(optionIndex,valueIndex)} />}

                              />
                            </Form.Item>
                          ))}


                          <Form.Item>
                            <Button type="dashed" onClick={() => handleAddValue(optionIndex)}>
                              Add Value
                            </Button>
                          </Form.Item>

                          <Button onClick={
                            () => {handleToggleEdit(optionIndex)
                                  console.log(options);}                           
                            } style={{ cursor: 'pointer' }} >Done </Button>

                        </>
                          :
                          <div style={{borderBottom:"solid 1px #000"}}>
                          
                           <div key={optionIndex} style={{ display: 'flex', justifyContent: 'space-between' }}>
    <label>{option.name}</label>
    <Button onClick={() => handleToggleEdit(optionIndex)}>Edit</Button>
  </div>

                          
                          {option.values.map((value, valueIndex) => (
                          <Tag key={valueIndex}>{value}</Tag>
                        ))}
                        
                          </div >
                        }
                       
                    
                    </div>
                  ))}
                
                  <Button style={{ width: '100%', textAlign: 'center' }} onClick={handleAddOption}>
                      Add Option
                    </Button>
      </Card>

        
                <div>
                  {combinations && combinations.length > 0 && combinations[0].length > 1  && 
                <Card>
              <h2>Variants</h2>
                
              {combinations.map((combination, index) => (
        <Row key={index} gutter={[32, 32]} className='my-2' justify="space-around">
            <Col key={index} span={4}>

            {combination.map((value, idx) => (
  <>
    <span>{value}</span>
    {combination.length > 1 && idx !== combination.length - 1 && <span>.</span>}
  </>
))}

          </Col>
          
            
              <Col span={4}>
                <Input />
              </Col>
              <Col span={4}>
                <Input />
              </Col>
              <Col span={4}>
                <Button>Edit </Button>
              </Col>
            
          
        </Row>
      ))}
      </Card>
}
            </div>
            </>
}
              </Form>
            </div>
          
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
