/** @jsx React.DOM */

define([
    'react',
    'constants',
    'utils'
], function (
    React,
    Constants,
    Utils
) {

    var UserAreas = React.createClass({
        render: function() {
            var showList =
                this.props.state.room.status !== Constants.RoomState.IDLE ?
                 <UserAreaList users={this.props.state.users} /> :
                 <div id='noUser'></div>

            return (
                <section id="userareas">
                    {showList}
                </section>
                )
        }
    });

    var UserAreaList = React.createClass({
        render: function() {
            var userareas = this.props.users.map(function(user) {
                    return <UserArea user={user} />;
                });

            return (
                <div>
                    {userareas}
                </div>
                )
        }
    });

    var UserArea = React.createClass({
        render: function() {
            var props = {
                id: 'uservideo' + this.props.user.id,
                autoPlay: true,
                muted: this.props.user.isMuted || this.props.user.id === 0
            };

            return (
                <div>
                    {React.DOM.video(props)}
                </div>
                );
        }
    });

    return UserAreas;
});
