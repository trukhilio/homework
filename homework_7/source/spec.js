import React from 'react';
import { shallow, mount } from 'enzyme';
import {List, arr}  from './function.js';

describe('Find elements in array', () => {
    it('should find any element in array',() => {
        expect(arr.length>0).toBe(true);
    });
    it('should be a number', ()=>{
        const num = arr.map((num)=> expect(num).toEqual(jasmine.any(Number)));
    });
});

describe('List component', ()=>{
    describe('props', ()=>{
        describe('name',()=>{
            it('render without exploding', ()=>{
                expect(shallow(<List />).length).toEqual(1);
            });
        });
        describe('arrow',()=>{
            it('arrow should not be defined by default',()=>{
                expect(shallow(<List />).props().arr).not.toBeDefined();
            });
            it('items li in List equal arrow itmes', ()=>{
                const arr = [1,2,5];
                expect(mount(<List arr={arr}/>).find('li').length).toBe(3)
            });
            it('items li do not exist without arrow',()=>{
                expect(mount(<List />).find('li').length).toBe(0)
            });
        });
    });
});