import React from 'react';import { shallow, mount, configure } from 'enzyme';
import ReactDOM from 'react-dom';
import Login from './stulogin';
import Dash from './studash';
import Facpass from './facpass';
import Studachi from './studachi';
import Facdash from './facdash.jsx';
import Applypass from './applypass.jsx';
import Passhist from './passhist.jsx';



describe('Renders Fac Dashboard Without crashing', () => {

    it('Fac Dash loading correctly', () => {
      window.alert = jest.fn();
      let assignMock = jest.fn();
      delete window.location;
      window.location = { pushState: assignMock,reload:jest.fn() };
    window.reload= jest.fn();
      var wrapper = shallow(<Facdash/>); 
      
      var state1={ fac_name: "", fac_id: "", gender:"Male",email:"",qual:"",
      dob:"",mobile:"",addr:"",advisor_for:""};
      const div = document.createElement('div');
    ReactDOM.render(<Facdash />, div);
    //expect(window.alert).toBeCalledWith('haha');
    ReactDOM.unmountComponentAtNode(div);
      
      wrapper.setState(state1)     
      expect(wrapper.state("gender")).toEqual('Male')
    });
});


describe('Renders  Without crashing', () => {

    it(' loading correctly', () => {
      window.alert = jest.fn();
      let assignMock = jest.fn();
      delete window.location;
      window.location = { pushState: assignMock,reload:jest.fn() };
    window.reload= jest.fn();
      var wrapper = shallow(<Studachi/>); 
      //window.alert = jest.fn();
      var state1={count:1};
      //let assignMock = jest.fn();
      //delete window.location;
      //window.location = { pushState: assignMock,reload:jest.fn() };
    //window.reload= jest.fn()
    wrapper.setState(state1)      
      expect(wrapper.state('count')).toEqual(1)
    });
});

describe('Renders  Without crashing', () => {

    it(' loading correctly', () => {
      window.alert = jest.fn();
      let assignMock = jest.fn();
      delete window.location;
      window.location = { pushState: assignMock,reload:jest.fn() };
    window.reload= jest.fn();
      var wrapper = shallow(<Applypass/>); 
      //window.alert = jest.fn();
      var state1={status:""};
    //   let assignMock = jest.fn();
    //   delete window.location;
    //   window.location = { pushState: assignMock,reload:jest.fn() };
    // window.reload= jest.fn()
    wrapper.setState(state1)     
      expect(wrapper.state('status')).toEqual('')
    });
    //window.alert = jsdomAlert;
});

describe('Renders  Without crashing', () => {

    it(' loading correctly', () => {
      window.alert = jest.fn();
      let assignMock = jest.fn();
      delete window.location;
      window.location = { pushState: assignMock,reload:jest.fn() };
    window.reload= jest.fn();
      var wrapper = shallow(<Passhist/>); 
      //window.alert = jest.fn();
      var state1={count:1};
      //let assignMock = jest.fn();
    //   delete window.location;
    //   window.location = { pushState: assignMock,reload:jest.fn() };
    // window.reload= jest.fn()
    wrapper.setState(state1)     
      expect(wrapper.state('count')).toEqual(1)
    });
});


describe('Renders Faculty Pass Without crashing', () => {

    it('Faculty Pass loading correctly', () => {
      window.alert = jest.fn();
      let assignMock = jest.fn();
      delete window.location;
      window.location = { pushState: assignMock,reload:jest.fn() };
    window.reload= jest.fn();
      var wrapper = shallow(<Facpass />);
    
     // window.alert = jest.fn();
      var state1={count:1,isToggleOn: [],status : "APPROVE", listUI : []};
    //   let assignMock = jest.fn();

    //   delete window.location;
    //   window.location = { pushState: assignMock,reload:jest.fn() };
    // window.reload= jest.fn()
      wrapper.setState({'status':'APPROVE'})
     
      expect(wrapper.state('status')).toEqual('APPROVE')
    //   expect(wrapper.state('stu_name')).not.toEqual('test2')
    //   expect(wrapper.state('pwd')).toEqual('17464')
    
    });
    
    

});



describe('Test cases for Student Achievements Without crashing', () => {

    it('Faculty Pass loading correctly', () => {
      window.alert = jest.fn();
      let assignMock = jest.fn();
      delete window.location;
      window.location = { pushState: assignMock,reload:jest.fn() };
    window.reload= jest.fn();
      var wrapper = shallow(<Dash />);
    
    //  window.alert = jest.fn();
      var state1={count:1};
      //delete window.location;
      wrapper.setState(state1)
      // window.location = { pushState: jest.fn(),reload:jest.fn() };
      // window.reload= jest.fn()
      expect(wrapper.state('count')).toEqual(1)
    //   expect(wrapper.state('stu_name')).not.toEqual('test2')
    //   expect(wrapper.state('pwd')).toEqual('17464')
    
    });
    
    

});


describe('Renders Dashboard Without crashing', () => {

it('Dashboard loading correctly', () => {
  window.alert = jest.fn();
      let assignMock = jest.fn();
      delete window.location;
      window.location = { pushState: assignMock,reload:jest.fn() };
    window.reload= jest.fn();
  var wrapper = shallow(<Dash />);

 // window.alert = jest.fn();
  var state1={stu_name: "test1", stu_id: "1", gender:"M",email:"test@gmail.com",dob:"20-01-2001",
  mobile:"818181",addr:"test",school:"HSJS",percent:"34",branch:"ECE",sec:"B",cur_sem:"6",cgpa:"9.20"}

  var state2={stu_name: "test1", stu_id: "1", gender:"M",email:"test@gmail.com",dob:"20-01-2001",
  mobile:"818181",addr:"test",school:"HSJS",percent:"34",branch:"ECE",sec:"B",cur_sem:"6",cgpa:"9.20"}

  wrapper.setState(state1)
  // delete window.location;
  // window.location = { pushState: jest.fn(),reload:jest.fn() };
  // window.reload= jest.fn()
  expect(wrapper.state('stu_name')).toEqual('test1')
  expect(wrapper.state('stu_name')).not.toEqual('test2')
//   expect(wrapper.state('pwd')).toEqual('17464')

});
});

describe('Renders Dashboard Without crashing', () => {

    it('Dashboard loading correctly', () => {
      window.alert = jest.fn();
      let assignMock = jest.fn();
      delete window.location;
      window.location = { pushState: assignMock,reload:jest.fn() };
    window.reload= jest.fn();
      var wrapper = shallow(<Dash />);
    
     // window.alert = jest.fn();
      var state1={stu_name: "test1", stu_id: "1", gender:"M",email:"test@gmail.com",dob:"20-01-2001",
      mobile:"818181",addr:"test",school:"HSJS",percent:"34",branch:"ECE",sec:"B",cur_sem:"6",cgpa:"9.20"}
    
      var state2={stu_name: "test1", stu_id: "1", gender:"M",email:"test@gmail.com",dob:"20-01-2001",
      mobile:"818181",addr:"test",school:"HSJS",percent:"34",branch:"ECE",sec:"B",cur_sem:"6",cgpa:"9.20"}
    
      wrapper.setState(state1)
      // delete window.location;
      // window.location = { pushState: jest.fn(),reload:jest.fn() };
      // window.reload= jest.fn()
      expect(wrapper.state('stu_name')).toEqual('test1')
      expect(wrapper.state('stu_name')).not.toEqual('test2')
    //   expect(wrapper.state('pwd')).toEqual('17464')
    
    });
    });
    


// describe('Renders Login Without crashing', () => {

// it('State variables set correctly', () => {
//   window.alert = jest.fn();
//       let assignMock = jest.fn();
//       delete window.location;
//       window.location = { pushState: assignMock,reload:jest.fn() };
//     window.reload= jest.fn();
//     var wrapper = shallow(<Login />);
  
//     wrapper.find('[name="uname"]').at(0).simulate('change', { target: { name: 'uname', value: 'cb.en.u4cse17464' } });
//     wrapper.find('[name="pwd"]').at(0).simulate('change', { target: { name: 'pwd', value: '17464' } });
  
//     // window.location = { pushState: jest.fn(),reload:jest.fn() };
//     // window.reload= jest.fn()
//     expect(wrapper.state('uname')).toEqual('cb.en.u4cse17464')
//     expect(wrapper.state('pwd')).toEqual('17464')
//     });

    
// it('check blank Name', () => {
//   window.alert = jest.fn();
//       let assignMock = jest.fn();
//       delete window.location;
//       window.location = { pushState: assignMock,reload:jest.fn() };
//     window.reload= jest.fn();
//     var wrapper = shallow(<Login />);
  
//   //  window.alert = jest.fn();
  
//     wrapper.find('[name="uname"]').at(0).simulate('change', { target: { name: 'uname', value: 'cb.en.u4cse17464' } });
//     wrapper.find('[name="pwd"]').at(0).simulate('change', { target: { name: 'pwd', value: '' } });
  
//     // window.location = { pushState: jest.fn(),reload:jest.fn() };
//     // window.reload= jest.fn()
//     expect(wrapper.state('uname')).toEqual('cb.en.u4cse17464')
//     expect(wrapper.state('pwd')).toEqual('')
  
//     wrapper.find('#submit').simulate('click',{ preventDefault: () => { }});
   
//   var rblank= {val: true,msg:"Enter Something!" }
//   expect(wrapper.state('error')).toEqual(rblank)
  
//     // var data=1
//     // expect(data).toBe(1)
//   //   expect(wrapper.state().errors['uname']).toBe('cb.en.u4cse17464');
//   });
  
    
// it('check blank Pass', () => {
//   window.alert = jest.fn();
//       let assignMock = jest.fn();
//       delete window.location;
//       window.location = { pushState: assignMock,reload:jest.fn() };
//     window.reload= jest.fn();
//     var wrapper = shallow(<Login />);
  
//    // window.alert = jest.fn();
  
  
//     // window.location = { pushState: jest.fn(),reload:jest.fn() };
//     // window.reload= jest.fn()
//     wrapper.find('[name="uname"]').at(0).simulate('change', { target: { name: 'uname', value: '' } });
//     wrapper.find('[name="pwd"]').at(0).simulate('change', { target: { name: 'pwd', value: '174564' } });
  
//     expect(wrapper.state('uname')).toEqual('')
//     expect(wrapper.state('pwd')).toEqual('174564')
  
//     wrapper.find('#submit').simulate('click',{ preventDefault: () => { }});
   
//   var rblank= {val: true,msg:"Enter Something!" }
//   expect(wrapper.state('error')).toEqual(rblank)
  
//     // var data=1
//     // expect(data).toBe(1)
//   //   expect(wrapper.state().errors['uname']).toBe('cb.en.u4cse17464');
//   });
  
  
// it('check correct login for faculty', () => {
//   window.alert = jest.fn();
//       let assignMock = jest.fn();
//       delete window.location;
//       window.location = { pushState: assignMock,reload:jest.fn() };
//     window.reload= jest.fn();
//     var wrapper = shallow(<Login />);
  
//     //window.alert = jest.fn();
  
//     // window.location = { pushState: jest.fn() ,reload:jest.fn()};
//     // window.reload= jest.fn()
  
//     wrapper.find('[name="uname"]').at(0).simulate('change', { target: { name: 'uname', value: 'cb.en.t.1001' } });
//     wrapper.find('[name="pwd"]').at(0).simulate('change', { target: { name: 'pwd', value: 'pass' } });
  
//     expect(wrapper.state('uname')).toEqual('cb.en.t.1001')
//     expect(wrapper.state('pwd')).toEqual('pass')
  
//     wrapper.find('#submit').simulate('click',{ preventDefault: () => { }});
   
//     wrapper.instance().Trigger() 

//   var rblank= {val: false,msg:"" }
//   expect(wrapper.state('error')).toEqual(rblank)
//   });

  
// it('check correct login for student', () => {
//   window.alert = jest.fn();
//       let assignMock = jest.fn();
//       delete window.location;
//       window.location = { pushState: assignMock,reload:jest.fn() };
//     window.reload= jest.fn();
//     var wrapper = shallow(<Login />);
  
//     // window.alert = jest.fn();
  
//     // window.location = { pushState: jest.fn() ,reload:jest.fn()};
//     // window.reload= jest.fn()
//     wrapper.find('[name="uname"]').at(0).simulate('change', { target: { name: 'uname', value: 'cb.en.u4cse17464' } });
//     wrapper.find('[name="pwd"]').at(0).simulate('change', { target: { name: 'pwd', value: '17464' } });
  
//     expect(wrapper.state('uname')).toEqual('cb.en.u4cse17464')
//     expect(wrapper.state('pwd')).toEqual('17464')
  
//     wrapper.find('#submit').simulate('click',{ preventDefault: () => { }});
   
//     wrapper.instance().Trigger() 

//   var rblank= {val: false,msg:"" }
//   expect(wrapper.state('error')).toEqual(rblank)
//   });

// it('check error showing', () => {
//   window.alert = jest.fn();
//       let assignMock = jest.fn();
//       delete window.location;
//       window.location = { pushState: assignMock,reload:jest.fn() };
//     window.reload= jest.fn();
//     var wrapper = shallow(<Login />);
  
//     // window.alert = jest.fn();
  
//     // window.location = { pushState: jest.fn(),reload:jest.fn() };
//     // window.reload= jest.fn()
  
//     wrapper.find('[name="uname"]').at(0).simulate('change', { target: { name: 'uname', value: 'cb.en.u4cse17464' } });
//     wrapper.find('[name="pwd"]').at(0).simulate('change', { target: { name: 'pwd', value: '1744' } });
  
//     expect(wrapper.state('uname')).toEqual('cb.en.u4cse17464')
//     expect(wrapper.state('pwd')).toEqual('1744')
  
//     wrapper.find('#submit').simulate('click',{ preventDefault: () => { }});
   
//     wrapper.find('[name="uname"]').at(0).simulate('change', { target: { name: 'uname', value: 'cb.en.u4cse17464' } });
//     wrapper.find('[name="pwd"]').at(0).simulate('change', { target: { name: 'pwd', value: '1744' } });
//     wrapper.setState({username:"",email:"Admin@gmail.com"})
//     wrapper.setState({status:'fail'})

//     wrapper.instance().Trigger() 

//   var rblank= {val: true,msg:"Wrong User or Pass" }
//   expect(wrapper.state('error')).toEqual(rblank)
  
//     // var data=1
//     // expect(data).toBe(1)
//   //   expect(wrapper.state().errors['uname']).toBe('cb.en.u4cse17464');
//   });
// })