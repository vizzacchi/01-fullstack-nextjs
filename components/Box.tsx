import React from "react";

interface StyleSheet{
  fontFamily: string;
}

interface BoxProps{
  StyleSheet: StyleSheet;
  children: React.ReactNode;
  tag?: string;
}

export default function Box({StyleSheet, children, tag}) {
  const Tag = tag || 'div';
  return (
      <Tag style={StyleSheet}>
        {children}
      </Tag>
  );
}
// Componente genérico que recebe um estilo, um comp e uma tag e retorna o comp com a tag e o estilo, se não receber a tag retorna div
