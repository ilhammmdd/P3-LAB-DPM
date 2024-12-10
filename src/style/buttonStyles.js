import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  grayOutlinedButton: {
    borderColor: '#007bff', 
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  grayOutlinedButtonText: {
    color: '#007bff', 
    fontWeight: '700',
    fontSize: 16,
  },
});
