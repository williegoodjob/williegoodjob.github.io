// MyErrorMessage 錯誤訊息元件，顯示運算錯誤 - 暗色主題
function MyErrorMessage({ error }) {
  if (!error) return null;
  
  return (
    <div style={{ 
      color: '#ff6b6b', 
      marginTop: '12px', 
      textAlign: 'center',
      padding: '6px',
      borderRadius: '4px',
      backgroundColor: 'rgba(255, 107, 107, 0.1)',
      border: '1px solid rgba(255, 107, 107, 0.3)'
    }}>
      {error}
    </div>
  );
}

export default MyErrorMessage;
