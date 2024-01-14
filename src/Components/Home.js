// src/components/InvoiceApp.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addInvoice, updateInvoice, deleteInvoice } from '../Actions/invoiceActions';
import styles from './home.module.css';


const InvoiceApp = ({ invoices, addInvoice, updateInvoice, deleteInvoice }) => {
  const [formData, setFormData] = useState({
    name: '',
    paymentAmount: '',
    status: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddInvoice = () => {

    addInvoice({
      id: Date.now(), 
      ...formData,
    });

    setFormData({ name: '', paymentAmount: '', status: '' });
  };

  const handleUpdateInvoice = (id) => {
    const updatedData = {
      name: prompt('Enter new name:', formData.name) || formData.name,
      paymentAmount: prompt('Enter new amount:', formData.paymentAmount) || formData.paymentAmount,
      status: prompt('Enter new status:', formData.status) || formData.status,
    };

    updateInvoice(id, updatedData);
  };

  const handleDeleteInvoice = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this invoice?");
    if (confirmed) {
      deleteInvoice(id);
      alert("Deleted Successfully");
    } else {
      alert("Deletion Cancelled");
    }
  };
  

  return (
    <div className={styles.container}>
      <div className="heading"><h2>Invoice App</h2></div>
      <div>
        <div className={styles.lebel_container}>
        <label className={styles.page_label}>Name</label>
        <label className={styles.page_label}>Amount</label>
        <label className={styles.page_label}>Status</label>

        </div>
        <div className={styles.input_container}>
    
        <input className={styles.detail_input} type="text" name="name" value={formData.name} onChange={handleInputChange} />
        <input className={styles.detail_input} type="text" name="paymentAmount" value={formData.paymentAmount} onChange={handleInputChange} />
        <input className={styles.detail_input} type="text" name="status" value={formData.status} onChange={handleInputChange} />

        <button className={styles.invoice_button} onClick={handleAddInvoice}>Add New Invoice</button>
     
      </div>
      </div >

      <div className={styles.invoice_list}>
     
      
      <ul className='invoice-list'>
  {invoices.map((invoice) => (
    <li key={invoice.id} className={styles.invoice_items}>
      <div className='invoice-details'>
        <span className={`${styles.label} ${styles.s3}`}>Name:</span>
        <span className={`${styles.value} ${styles.s3}`}>{invoice.name}</span>
        <span className={`${styles.label} ${styles.s3}`}>Amount:</span>
        <span className={`${styles.value} ${styles.s3}`}>{invoice.paymentAmount}</span>
        <span className={`${styles.label} ${styles.s3}`}>Status:</span>
        <span className={`${styles.value} ${styles.s3}`}>{invoice.status}</span>
      </div>
      <div className='invoice-buttons'>
        <button className={styles.invoice_list_button}onClick={() => handleUpdateInvoice(invoice.id)}>Update</button>
        <button className={`${styles.invoice_list_button} ${styles.delete}`} onClick={() => handleDeleteInvoice(invoice.id)}>Delete</button>
      </div>
    </li>
  ))}
</ul>

         
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  invoices: state.invoices.invoices,
});

export default connect(mapStateToProps, { addInvoice, updateInvoice, deleteInvoice })(InvoiceApp);















































