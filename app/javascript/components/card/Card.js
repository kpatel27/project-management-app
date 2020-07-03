import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { dueClass, dueDate } from '../../utils/dueDate';
import CommentListingContainer from '../comment-listing/CommentListingContainer';

class Card extends Component {
  state = {
    title: this.props.card && this.props.card.title,
    due_date: this.props.card && this.props.card.due_date,
    description: this.props.card && this.props.card.description,
    completed: this.props.card && this.props.card.completed,
  };

  componentDidMount() {
    if (!this.props.card) {
      this.props.onFetchCard(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.card && this.props.card) {
      this.setState({ title: this.props.card.title });
    }
  }

  handleToggleCheckbox = e => {
    this.handleEditItemSubmit({ completed: !this.state.completed }, () => {
      this.setState({ completed: !this.state.completed });
    });
  };

  handleModalClose = () => {
    this.props.history.push(`/boards/${this.props.card.board_id}`);
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleTitleSubmit = e => {
    e.preventDefault();
    this.handleEditItemSubmit({ title: this.state.title });
  };

  handleEditItemSubmit = (newProps, callback) => {
    this.props.onEditCard(this.props.card.id, newProps, callback);
  };

  handleListenForEnter = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.blur();
    }
  };

  render() {
    const dueStatus = dueClass(this.props.card);

    return (
      <div id='modal-container'>
        <div className='screen'></div>
        <div id='modal'>
          <i
            className='x-icon icon close-modal'
            onClick={this.handleModalClose}
          ></i>
          <header>
            <i className='card-icon icon .close-modal'></i>
            <textarea
              className='list-title'
              style={{ height: '45px' }}
              // defaultValue={this.props.card && this.props.card.title}
              value={this.state.title}
              onChange={this.handleTitleChange}
              onBlur={this.handleTitleSubmit}
              onKeyPress={this.handleListenForEnter}
            ></textarea>
            <p>
              in list{' '}
              <a className='link'>
                {this.props.currentCardList && this.props.currentCardList.title}
              </a>
              <i className='sub-icon sm-icon'></i>
            </p>
          </header>
          <section className='modal-main'>
            <ul className='modal-outer-list'>
              <li className='details-section'>
                <ul className='modal-details-list'>
                  <li className='labels-section'>
                    <h3>Labels</h3>
                    <div className='member-container'>
                      <div className='green label colorblindable'></div>
                    </div>
                    <div className='member-container'>
                      <div className='yellow label colorblindable'></div>
                    </div>
                    <div className='member-container'>
                      <div className='orange label colorblindable'></div>
                    </div>
                    <div className='member-container'>
                      <div className='blue label colorblindable'></div>
                    </div>
                    <div className='member-container'>
                      <div className='purple label colorblindable'></div>
                    </div>
                    <div className='member-container'>
                      <div className='red label colorblindable'></div>
                    </div>
                    <div className='member-container'>
                      <i className='plus-icon sm-icon'></i>
                    </div>
                  </li>
                  <li className='due-date-section'>
                    <h3>Due Date</h3>
                    <div
                      id='dueDateDisplay'
                      className={dueStatus}
                      onClick={this.handleToggleCheckbox}
                    >
                      <input
                        id='dueDateCheckbox'
                        type='checkbox'
                        className='checkbox'
                        checked={this.state.completed}
                        onChange={() => {}}
                      />
                      {dueDate(this.props.card)}
                      <span>
                        {dueStatus === 'overdue' ? ' (past due)' : ''}
                      </span>
                    </div>
                  </li>
                </ul>
                <form className='description'>
                  <p>Description</p>
                  <span id='description-edit' className='link'>
                    Edit
                  </span>
                  <p className='textarea-overlay'>
                    Cards have a symbol to indicate if they contain a
                    description.
                  </p>
                  <p id='description-edit-options' className='hidden'>
                    You have unsaved edits on this field.{' '}
                    <span className='link'>View edits</span> -{' '}
                    <span className='link'>Discard</span>
                  </p>
                </form>
              </li>
              <li className='comment-section'>
                <h2 className='comment-icon icon'>Add Comment</h2>
                <div>
                  <div className='member-container'>
                    <div className='card-member'>TP</div>
                  </div>
                  <div className='comment'>
                    <label>
                      <textarea
                        required=''
                        rows='1'
                        placeholder='Write a comment...'
                      ></textarea>
                      <div>
                        <a className='light-button card-icon sm-icon'></a>
                        <a className='light-button smiley-icon sm-icon'></a>
                        <a className='light-button email-icon sm-icon'></a>
                        <a className='light-button attachment-icon sm-icon'></a>
                      </div>
                      <div>
                        <input
                          type='submit'
                          className='button not-implemented'
                          defaultValue='Save'
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </li>
              <li className='activity-section'>
                <h2 className='activity-icon icon'>Activity</h2>
                <ul className='horiz-list'>
                  <li className='not-implemented'>Show Details</li>
                </ul>
                <ul className='modal-activity-list'>
                  <CommentListingContainer />
                </ul>
              </li>
            </ul>
          </section>
          <aside className='modal-buttons'>
            <h2>Add</h2>
            <ul>
              <li className='member-button'>
                <i className='person-icon sm-icon'></i>Members
              </li>
              <li className='label-button'>
                <i className='label-icon sm-icon'></i>Labels
              </li>
              <li className='checklist-button'>
                <i className='checklist-icon sm-icon'></i>Checklist
              </li>
              <li className='date-button not-implemented'>
                <i className='clock-icon sm-icon'></i>Due Date
              </li>
              <li className='attachment-button not-implemented'>
                <i className='attachment-icon sm-icon'></i>Attachment
              </li>
            </ul>
            <h2>Actions</h2>
            <ul>
              <li className='move-button'>
                <i className='forward-icon sm-icon'></i>Move
              </li>
              <li className='copy-button'>
                <i className='card-icon sm-icon'></i>Copy
              </li>
              <li className='subscribe-button'>
                <i className='sub-icon sm-icon'></i>Subscribe
                <i className='check-icon sm-icon'></i>
              </li>
              <hr />
              <li className='archive-button'>
                <i className='file-icon sm-icon '></i>Archive
              </li>
            </ul>
            <ul className='light-list'>
              <li className='not-implemented'>Share and more...</li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}

export default withRouter(Card);
