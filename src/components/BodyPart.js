import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? {  border: '2px solid #FFFFFF', background: '#131338', borderRadius: '12px', width: '160px', height: '52px', cursor: 'pointer', gap: '47px' } : { background: '#131338', borderRadius: '12px', width: '160px', height: '52px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
    }}
  >
    <Typography className="text-white" fontWeight="semibold" sx={{ fontSize: { lg: '20px', xs: '20px' } }} >{item}</Typography>
  </Stack>
);

export default BodyPart;