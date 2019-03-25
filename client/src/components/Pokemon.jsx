import React from 'react';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='pokemon-img-container d-flex align-content-center justify-content-center'>
          <img className='pokemon-img' src={this.props.image} />
        </div>
        <div className='mt-2'>
          {this.props.name} - {this.props.number}
        </div>
        <div>
          Type:{' '}
          {this.props.types.length > 1
            ? this.props.types.map((type, i) => {
                return i === 0 ? `${type} / ` : type;
              })
            : this.props.types[0]}
        </div>
        <div>ID: {this.props.id}</div>
        <div>
          Max CP: {this.props.maxCP} / Max HP: {this.props.maxHP}
        </div>
      </div>
    );
  }
}

export default Pokemon;
