Page({
  onLoad() {
    console.log('Page Load...')
  },
  data: {
    bankList: [
      {key: 'A', datas: [{name: 'asome'},{name: 'asome'},{name: 'asome'}], dataKey: 'name' },
      {key: 'B', datas: [{name: 'bsome'},{name: 'bsome'},{name: 'bsome'}], dataKey: 'name' },
      {key: 'C', datas:  ['csome','centries','care here'], dataKey: '' },
      {key: 'D', datas:  ['dsome','dentries','dare here'], dataKey: '' },
      {key: 'E', datas:  ['esome','eentries','eare here'], dataKey: '' },
      {key: 'F', datas:  ['fsome','fentries','fare here'], dataKey: '' },
      {key: 'G', datas:  ['gsome','gentries','gare here'], dataKey: '' },
      {key: 'H', datas:  ['hsome','hentries','hare here'], dataKey: '' },
      {key: 'I', datas:  ['isome','ientries','iare here'], dataKey: '' },
      {key: 'J', datas:  ['jsome','jentries','jare here'], dataKey: '' },
      {key: 'K', datas:  ['ksome','kentries','kare here'], dataKey: '' },
      {key: 'L', datas:  ['lsome','lentries','lare here'], dataKey: '' },
      {key: 'M', datas:  ['msome','mentries','mare here'], dataKey: '' },
      {key: 'N', datas:  ['nsome','nentries','nare here'], dataKey: '' },
      {key: 'O', datas:  ['osome','oentries','oare here'], dataKey: '' },
      {key: 'P', datas:  ['psome','pentries','pare here'], dataKey: '' },
      {key: 'Q', datas:  ['qsome','qentries','qare here'], dataKey: '' },
      {key: 'R', datas:  ['rsome','rentries','rare here'], dataKey: '' },
      {key: 'S', datas:  ['some','sentries','sare here'], dataKey: '' },
      {key: 'T', datas:  ['tsome','tentries','tare here'], dataKey: '' },
      {key: 'U', datas:  ['usome','uentries','uare here'], dataKey: '' },
      {key: 'V', datas:  ['vsome','ventries','vare here'], dataKey: '' },
      {key: 'W', datas:  ['wsome','wentries','ware here'], dataKey: '' },
      {key: 'X', datas:  ['xsome','xentries','xare here'], dataKey: '' },
      {key: 'Y', datas:  ['ysome','yentries','yare here'], dataKey: '' },
      {key: 'Z', datas:  ['zsome','zentries','zare here'], dataKey: '' },
    
    ]
  },
  handlerChosed(e) {
    console.log(e)
    console.log('home')
  }
})
