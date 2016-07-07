var routes = [
	/**
	 * @api {post} /api/createUser User creations
	 * @apiVersion 0.1.0
	 * @apiName User creation
	 * @apiGroup User
	 * @apiPermission admin
	 * @apiParam {String} username Username of the User.
	 * @apiParam {String} [first_name] First name of the User.
	 * @apiParam {String} [last_name] Last name of the User.
	 * @apiParam {String} email  Mandatory email of the User.
	 * @apiParam {String} password  Mandatory password of the User.
	 * @apiParamExample {json} Request-Example:
	 *     {
	 *       "first_name": "Hans",
	 *       "first_name": "Govind",
	 *       "last_name": "Name",
	 *       "email": "hansgovind@gmail.com",
	 *       "password": "pa$$$",
	 *     }
	 *
	 * @apiSuccessExample {json} Success-Response:
	 *     HTTP/1.1 200 OK
	 *
	 * @apiError CannotCreateUser Error creating user.
	 *
	 * @apiErrorExample Error-Response:
 	 *     HTTP/1.1 404 Not Found
 	 *     {
 	 *         "error": "CannotCreateUser"
 	 *     }
	 */
	{
		path: '/api/createUser',
		httpMethod: 'POST'
	},

	/**
	 * @apiDefine UserNotFoundError
	 *
	 * @apiError UserNotFound The id of the User was not found.
	 *
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 404 Not Found
	 *     {
	 *       "error": "UserNotFound"
	 *     }
	 */

	/**
	 * @api {get} /api/user/:id Get user
	 * @apiVersion 0.1.0
	 * @apiName Get user
	 * @apiGroup User
	 *
	 * @apiParam {Number} id Users unique ID.
	 *
	 * @apiSucccess {String} first_name First name of the user.
	 * @apiSucccess {String} last_name Last name of the user.
	 *
	 * @apiSuccessExample Success-Response:
	 * 		HTTP/1.1 200 OK
	 * 		{
	 * 			"first_name": "Hans",
	 * 			"last_name": "Govind"
	 * 		}
	 *
	 * @apiUse UserNotFoundError
	 */
	 {
		 path: '/api/user/:id',
		 httpMethod: 'GET'
	 },
];
