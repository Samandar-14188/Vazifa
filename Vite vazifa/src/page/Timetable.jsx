
import { Card, Col, Divider, Row, Select } from 'antd';
import MyCard from '../components/Mycard';

const Options = [
  { value: 1, label: '5' },
  { value: 1, label: '6' },
  { value: 1, label: '7' },
  { value: 1, label: '8' },
  { value: 1, label: '9' },
];

const Days = [
  {
    title: 'Dushanba',
    classes: [
      { class: '5', subjects: ['Math', 'English', 'Physics', 'History'] },
      { class: '6', subjects: ['Algebra', 'Literature', 'Chemistry', 'World History'] },
      { class: '7', subjects: ['Math', 'English', 'Physics', 'History'] },
      { class: '8', subjects: ['Algebra', 'Literature', 'Chemistry', 'World History'] },
      { class: '9', subjects: ['Algebra', 'Literature', 'Chemistry', 'World History'] },
    ],
  },
  {
    title: 'Seshanba',
    classes: [
      { class: '5', subjects: ['Chemistry', 'Biology', 'Art', 'Physical Education'] },
      { class: '6', subjects: ['Geometry', 'English Literature', 'Physics', 'Geography'] },
      { class: '7', subjects: ['Chemistry', 'Biology', 'Art', 'Physical Education'] },
      { class: '8', subjects: ['Geometry', 'English Literature', 'Physics', 'Geography'] },
      { class: '9', subjects: ['Geometry', 'English Literature', 'Physics', 'Geography'] },
    ],
  },
  {
    title: 'Chorshanba',
    classes: [
      { class: '5', subjects: ['Geography', 'Computer Science', 'Music', 'Physical Education'] },
      { class: '6', subjects: ['History', 'Algebra', 'Biology', 'Chemistry'] },
      { class: '7', subjects: ['Geography', 'Computer Science', 'Music', 'Physical Education'] },
      { class: '8', subjects: ['History', 'Algebra', 'Biology', 'Chemistry'] },
      { class: '9', subjects: ['History', 'Algebra', 'Biology', 'Chemistry'] },
    ],
  },
  {
    title: 'Payshanba',
    classes: [
      { class: '5', subjects: ['History', 'English', 'Math', 'Physics'] },
      { class: '6', subjects: ['Physical Education', 'Chemistry', 'Literature', 'Art'] },
      { class: '7', subjects: ['History', 'English', 'Math', 'Physics'] },
      { class: '8', subjects: ['Physical Education', 'Chemistry', 'Literature', 'Art'] },
      { class: '9', subjects: ['Physical Education', 'Chemistry', 'Literature', 'Art'] },
    ],
  },
  {
    title: 'Juma',
    classes: [
      { class: '5', subjects: ['Physical Education', 'Art', 'Chemistry', 'Biology'] },
      { class: '6', subjects: ['English', 'Geometry', 'Music', 'World History'] },
      { class: '7', subjects: ['Physical Education', 'Art', 'Chemistry', 'Biology'] },
      { class: '8', subjects: ['English', 'Geometry', 'Music', 'World History'] },
      { class: '9', subjects: ['English', 'Geometry', 'Music', 'World History'] },
    ],
  },
  {
    title: 'Shanba',
    classes: [
      { class: '5', subjects: ['Biology', 'History', 'Geography', 'Computer Science'] },
      { class: '6', subjects: ['Computer Science', 'Geography', 'Algebra', 'Physics'] },
      { class: '7', subjects: ['Biology', 'History', 'Geography', 'Computer Science'] },
      { class: '8', subjects: ['Computer Science', 'Geography', 'Algebra', 'Physics'] },
      { class: '9', subjects: ['Computer Science', 'Geography', 'Algebra', 'Physics'] },
    ],
  },
];




const Timetable = () => {
  return (
    <div>
      <h1>Dars Jadvali</h1>
      <Divider />
      <Select options={Options} placeholder="Sinfni tanlang" size="large" />
      <div style={{ height: 30 }}></div>
      <Row gutter={16}>
        {Days.map((day, index) => (
          <Col span={8} key={index}>
            <MyCard data={day} />
          </Col>
        ))}
      
      </Row>
    </div>
  );
};
export default Timetable;