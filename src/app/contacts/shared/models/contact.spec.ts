import { Contact } from './contact';

describe('Contact', () => {
  let contact: Contact = null;

  beforeEach(() => {
    contact = new Contact();
  })

  it('should create an instance', () => {
    expect(contact).toBeTruthy();
  });

  it('should set name correctly through constructor', () => {
    contact = new Contact('Liz');
    expect(contact.name).toEqual('Liz');
  });

  it('should get and set id correctly', () => {
    contact.id = 1;
    expect(contact.id).toEqual(1);
  });

  afterEach(() => {
    contact = null;
  })
});
