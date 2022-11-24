export function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  export function defiFormat(num){
    return (Number(num) / 1e6).toFixed(2)
    
  }