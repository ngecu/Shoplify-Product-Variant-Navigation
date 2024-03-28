import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined,HeartOutlined,ShoppingCartOutlined, CheckOutlined  } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Input, Button, Form, Select, Row, Col, Card } from 'antd';
// import 'antd/dist/antd.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import UploadComponent from './Components/UploadComponent';
import { OptionValues } from './Interface/OptionInterface';

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
  const [optionValues, setOptionValues] = useState<OptionValues>({});

  const handleOptionValueChange = (optionName: string, valueIndex: number, value: string) => {
    const updatedOptionValues: OptionValues = { ...optionValues };
    if (!updatedOptionValues[optionName]) updatedOptionValues[optionName] = [];
    updatedOptionValues[optionName][valueIndex] = value;
    setOptionValues(updatedOptionValues);
  };

  const handleAddOption = () => {
    // Add new option with empty array for values
    const newOptionName = `Option ${Object.keys(optionValues).length + 1}`;
    setOptionValues({ ...optionValues, [newOptionName]: [] });
  };

  const handleGenerateVariants = () => {
    // Implement your logic for generating variants
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
    {Object.entries(optionValues).map(([optionName, values], index) => (
          <div key={optionName}>
            <h4>{optionName}</h4>
            {values.map((value, valueIndex) => (
              <Form.Item key={valueIndex} label={`Value ${valueIndex + 1}`}>
                <Input
                  placeholder={`Enter value ${valueIndex + 1}`}
                  value={value}
                  onChange={(e) => handleOptionValueChange(optionName, valueIndex, e.target.value)}
                />
              </Form.Item>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => handleOptionValueChange(optionName, values.length, '')}>
                Add Value
              </Button>
            </Form.Item>
          </div>
        ))}

        {/* Add Option Button */}
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
