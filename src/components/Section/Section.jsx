import PropTypes from 'prop-types';
export default function Section({ title, children, type }) {
  return (
    <>
      {type === 'h1' && <h1>{title}</h1>}
      {type === 'h2' && <h2>{title}</h2>}
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};