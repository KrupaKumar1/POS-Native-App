// GlobalButton.tsx

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface GlobalButtonProps {
  style?: StyleProp<ViewStyle>;
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

const GlobalButton: React.FC<GlobalButtonProps> = ({
  style,
  label,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[style, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  disabled: {
    backgroundColor: '#bdc3c7',
  },
});

export default GlobalButton;
