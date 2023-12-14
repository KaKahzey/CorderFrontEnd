# CorderFrontEnd


  //------------------------------------------------

  //#region admin account requests - model folder : admin
  // Model : loginData
  private _urlLogin : string = "http://192.168.200.102:8080/user/login"
  // Model : modifyAccount
  private _urlChangePassword : string = "http://192.168.200.102:8080/user/changePassword/"
  //#endregion

  //#region creation participant - model folder : user
  // Model : participantFullForm (ajout "acceptExposure")
  private _urlCreateUser : string = "http://192.168.200.102:8080/participation/create"
  // Model : onlyBlob (dossier models/shared)
  private _urlSetPicture : string = "http://192.168.200.102:8080/participation/addPhoto?id="
  // Model : opinion (changé Satisfaction -> Rating)
  private _urlRating : string = "http://192.168.200.102:8080/participation/createRating"
  //#endregion
  
  //#region dashboard - model folder : dashboard-comp
  // Model : dashboard
  private _urlDashboard : string = "http://192.168.200.102:8080/participation/getDashboard"
  //#endregion

  //#region participants - model folder : participants-comp
  // Model : participantMostData
  private _urlAllParticipants : string = "http://192.168.200.102:8080/participation/getAllParticipants"
  //#endregion

  //#region stats - model folder : stats-comp
  // Model : allButSpecificWeek
  private _urlStatsGetAll : string = "http://192.168.200.102:8080/participation/getAllStats"
  // Model : specificWeek
  private _urlStatsGetWeek : string = "http://192.168.200.102:8080/participation/getWeek="
  //#endregion

  //#region popup-validation - model folder : popup-comp
  // Model : participantPopup
  private _urlGetById : string = "http://192.168.200.102:8080/participation/getById/"
  // Model : onlyBlob (same model as post)
  private _urlGetPhoto : string = "http://192.168.200.102:8080/participation/getPhoto?id="
  // Patch id sera dans l'url
  private _urlValidate : string = "http://192.168.200.102:8080/participation/validate/"
  // Patch id sera dans l'url (changé le verbe denied -> deny)
  private _urlDeny : string ="http://192.168.200.102:8080/participation/deny/"
  // Patch id sera dans l'url
  private _urlShip : string = "http://192.168.200.102:8080/participation/ship/"
  //#endregion

  //------------------------------------------------
