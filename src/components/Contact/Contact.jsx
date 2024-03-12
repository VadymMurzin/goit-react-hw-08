import css from './contact.module.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';

export default function Contact({ contacts, isOpen }) {
  return (
    <div className={css.container}>
      <Avatar src="/broken-image.jpg" />
      <div className={css.blockContact}>
        <h2 className={css.text}>
          <span>Name:</span> {contacts.name}
        </h2>
        <p className={css.text}>
          <span>Phone:</span> {contacts.number}
        </p>
      </div>

      <Button
        onClick={() => isOpen(contacts.id)}
        className={css.button}
        type="button"
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </div>
  );
}
