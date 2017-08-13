(function() {
  function ModalCtrl($uibModalInstance, Room) {
      // cancel the Modal Ctrl
      this.close = function() {
          $uibModalInstance.close();
      }

      // add the room
      // close the modal
      this.add = function(roomName) {
        Room.add(roomName);
        $uibModalInstance.close();
      }
  }
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
