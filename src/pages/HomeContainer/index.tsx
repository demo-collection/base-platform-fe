import React, {ChangeEvent, FunctionComponent, useCallback, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getSceneInfo} from '../../server';

interface SelectItem {
  value: string;
  id: number;
}

const HomeContainer: FunctionComponent = () => {
  const [name, updateName] = useState<string>('');

  const fetchInfo = async () => {
    const info = await getSceneInfo(123);
    console.log(info);
  };

  useEffect(() => {
    fetchInfo();
    console.log(name);
    return () => {
      console.log('componentWillUnmount');
    };
  }, [name]);

  const arr: SelectItem[] = [{
    value: 'yanle',
    id: 1,
  }];

  const handleSelectChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    updateName(event.target.value.toString());
  }, []);

  const handleInputChange = (e: any) => updateName(e.target.value);

  return (
    <div>
      <p>首页内容 ~ ^.^ ~</p>
      <button onClick={() => console.log('123')}>click</button>
      <button>你好</button>
      <select style={{width: '300px'}}
              onChange={handleSelectChange}>
        {arr.map((item: any) => (<option key={item.value} value={item.id}>{item.value}</option>))}
      </select>

      <br/>
      <input value={name} onChange={handleInputChange}/>
    </div>
  );
};

export default connect()(HomeContainer);
