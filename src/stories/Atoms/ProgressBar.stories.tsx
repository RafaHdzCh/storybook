import { Meta, StoryFn } from '@storybook/react';
import { ProgressBar } from '@fluentui/react-components';
import { makeStyles, shorthands } from '@fluentui/react-components';
import React from 'react';

// Definimos los estilos usando makeStyles y shorthands
const useStyles = makeStyles({
  container: {
    ...shorthands.margin('20px', '0px'),
  },
});

// Definimos el título y componentes relacionados para la historia de Storybook
export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
} as Meta;

// Definimos un Template para usar en las historias
const Template: StoryFn<{ shape: 'rounded' | 'square'; thickness: 'large'; value: number }> = (args) => {
  const styles = useStyles();
  return (
    <div>
      <ProgressBar className={styles.container} {...args} />
    </div>
  );
};

// Exportamos las historias individuales de la barra de progreso
export const RoundedProgressBar = Template.bind({});
RoundedProgressBar.args = {
  shape: 'rounded',
  thickness: 'large',
  value: 0.5,
};

export const SquareProgressBar = Template.bind({});
SquareProgressBar.args = {
  shape: 'square',
  thickness: 'large',
  value: 0.5,
};