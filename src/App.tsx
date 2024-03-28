import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined,HeartOutlined,ShoppingCartOutlined, CheckOutlined,DeleteOutlined, EditOutlined   } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Input, Button, Form, Select, Row, Col, Card, Space, Tag } from 'antd';
// import 'antd/dist/antd.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import UploadComponent from './Components/UploadComponent';


const { Header, Content, Sider } = Layout;
const { Option } = Select;

const App: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [discountedPrice, setDiscountedPrice] = useState<string>('');
  const [nonDiscountedPrice, setNonDiscountedPrice] = useState<string>('');
  const [buyingPrice, setBuyingPrice] = useState<string>('')
  const [productOptions, setProductOptions] = useState<string[]>([]);
  const [variants, setVariants] = useState<string[]>([]);
  const [options, setOptions] = useState<Option[]>([{ name: '', values: [''], editing: true }]);

  const handleOptionChange = (index: number, key: keyof Option, value: string) => {
    const newOptions = [...options];
    newOptions[index][key] = value;
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

  const handleGenerateVariants = () => {
    // Implement your logic for generating variants
  };

  const handleToggleEdit = (index: number) => {
    const newOptions = [...options];
    newOptions[index].editing = !newOptions[index].editing;
    setOptions(newOptions);
  };


  return (
    <Layout>
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
              <h2>Add Product</h2>
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

      <Card className='my-2'>
      <Form.Item label="Images">
      <UploadComponent/>
      </Form.Item>
    </Card>

    <Card className='my-2'>
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

    <Card className='my-2'>
                  {options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <Space>
                        {option.editing ?
                          <Form.Item label={`Option ${optionIndex + 1} Name`} extra={<EditOutlined onClick={() => handleToggleEdit(optionIndex)} style={{ cursor: 'pointer' }} />}>
                            <Input
                              placeholder={`Enter option ${optionIndex + 1} name`}
                              value={option.name}
                              onChange={(e) => handleOptionChange(optionIndex, 'name', e.target.value)}
                            />
                          </Form.Item>
                          :
                          <Tag>{option.name}</Tag>
                        }
                        {option.values.map((value, valueIndex) => (
                          <Tag key={valueIndex}>{value}</Tag>
                        ))}
                        <Button type="text" icon={<DeleteOutlined />} onClick={() => handleDeleteOption(optionIndex)} danger />
                      </Space>
                      {option.editing &&
                        <Form.Item>
                          <Button type="dashed" onClick={() => handleAddValue(optionIndex)}>
                            Add Value
                          </Button>
                        </Form.Item>
                      }
                    </div>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={handleAddOption}>
                      Add Option
                    </Button>
                  </Form.Item>
                </Card>

   
            
                <Form.Item>
                  <Button type="primary" onClick={handleGenerateVariants}>
                    Generate Variants
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div>
              <h2>Variants</h2>
              <Select mode="tags" style={{ width: '100%' }} placeholder="Select variants">
                {variants.map((variant, index) => (
                  <Option key={index} value={variant}>
                    {variant}
                  </Option>
                ))}
              </Select>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
