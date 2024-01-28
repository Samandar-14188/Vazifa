import React from 'react';
import { Card, Select } from 'antd';

export default function MyCard({ data }) {
  const { title, classes } = data;

  return (
    <Card title={title} bordered={false}>
      {classes.map((classItem) => (
        <div key={classItem.class}>
          <h3>Sinf {classItem.class}</h3>
          <Select
            placeholder='Dars jadvali'
            options={classItem.subjects.map((subject) => ({ value: subject, label: subject }))}
          />
        </div>
      ))}
    </Card>
  );
}