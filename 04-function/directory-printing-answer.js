var fileSystemObj = {
  name: 'Root',
  type: 'D',
  childs: [
    {
      name: 'Sub-Dir A',
      type: 'D',
      childs: [
        {
          name: 'Sub-Sub-Dir C',
          type: 'D',
          childs: [
            {
              name: 'Sub-Sub-Sub-Dir D',
              type: 'D',
              childs: [
                {
                  name: 'File D-1',
                  type: 'F'
                }
              ]
            }
          ]
        },
        {
          name: 'File A-1',
          type: 'F'
        },
        {
          name: 'File A-2',
          type: 'F'
        }
      ]
    },
    {
      name: 'Sub-Dir B',
      type: 'D',
      childs: [
        {
          name: 'File B-1',
          type: 'F'
        }
      ]
    },
    {
      name: 'File Root-1',
      type: 'F'
    },
    {
      name: 'File Root-2',
      type: 'F'
    }
  ]
}

function printDir(fileSystemObj, indent) {
  var indentStr = '';
  indent = indent || 0;

  var tmp = indent;

  while (tmp > 0) {
    indentStr += ' ';
    tmp--;
  }

  if (fileSystemObj.type === 'D') {
    console.log(indentStr + '- [' + fileSystemObj.name + ']');
    var childObjs = fileSystemObj.childs;

    for (var i = 0; i < childObjs.length; i++) {
      printDir(childObjs[i], indent + 2);
    }
  } else {
    console.log(indentStr + '  ' + fileSystemObj.name);
  }
}

printDir(fileSystemObj);
