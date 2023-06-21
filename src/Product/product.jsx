export const Product = ({ product }) => {
  const { name, id } = product;
  const { title, icon } = product.category;
  const { user } = product.user;
  const userName = user ? user.name : null;
  const userSex = user ? user.sex : null;

  return (
    <tr data-cy="Product">
      <td className="has-text-weight-bold" data-cy="ProductId">
        {id}
      </td>
      <td data-cy="ProductName">{name}</td>
      <td data-cy="ProductCategory">{`${icon} - ${title}`}</td>
      <td
        data-cy="ProductUser"
        className={userSex === 'm'
          ? 'has-text-link' : (userSex && 'has-text-danger')}
      >
        {userName || 'N/A'}
      </td>
    </tr>
  );
};

/* export const Product = ({ product }) => {
  const { name, user, id } = product;

  return (
    <tr data-cy="Product">
      <td className="has-text-weight-bold" data-cy="ProductId">
        {id}
      </td>

      <td data-cy="ProductName">{name}</td>
      <Category category={category} />

      <td
        data-cy="ProductUser"
        className="has-text-link"
      >
        {user}
      </td>
    </tr>

  );
}; */
