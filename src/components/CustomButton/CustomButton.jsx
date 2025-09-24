import React from 'react';

const CustomButton = ({ onClick, children, variant = 'primary', size = 'medium', ...props }) => {
  const getButtonStyles = () => {
    const baseStyles = {
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      display: 'inline-block',
      transition: 'all 0.3s ease',
      fontWeight: '600',
      textDecoration: 'none',
      position: 'relative',
      overflow: 'hidden',
      ...props.style
    };

    const sizeStyles = {
      small: {
        padding: '8px 16px',
        fontSize: '14px'
      },
      medium: {
        padding: '12px 24px',
        fontSize: '16px'
      },
      large: {
        padding: '16px 32px',
        fontSize: '18px'
      }
    };

    const variantStyles = {
      primary: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
      },
      secondary: {
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        color: '#fff',
        boxShadow: '0 4px 15px rgba(240, 147, 251, 0.3)'
      },
      success: {
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        color: '#fff',
        boxShadow: '0 4px 15px rgba(79, 172, 254, 0.3)'
      },
      newsblock: {
        background: '#1976d2',
        color: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        borderRadius: '8px'
      }
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant]
    };
  };

  const handleMouseEnter = (e) => {
    if (variant === 'newsblock') {
      e.target.style.background = '#1565c0';
    } else {
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.boxShadow = variant === 'primary' 
        ? '0 8px 25px rgba(102, 126, 234, 0.4)'
        : variant === 'secondary'
        ? '0 8px 25px rgba(240, 147, 251, 0.4)'
        : '0 8px 25px rgba(79, 172, 254, 0.4)';
    }
  };

  const handleMouseLeave = (e) => {
    if (variant === 'newsblock') {
      e.target.style.background = '#1976d2';
    } else {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = variant === 'primary' 
        ? '0 4px 15px rgba(102, 126, 234, 0.3)'
        : variant === 'secondary'
        ? '0 4px 15px rgba(240, 147, 251, 0.3)'
        : '0 4px 15px rgba(79, 172, 254, 0.3)';
    }
  };

  return (
    <button
      onClick={onClick}
      style={getButtonStyles()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
