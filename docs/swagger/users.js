
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: Objected-id
 *         username:
 *           type: string
 *           description: username
 *         email:
 *           type: string
 *           description: email
 *         password:
 *           type: string
 *           description: password
 *       example:
 *         id: dfgd98ye89tyerty34895
 *         username: Akmaljon
 *         password: 12345aaa
 *         email: Azizxon@gmail.com
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Registration
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Registr
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Log-in:
 *       type: object
 *       required:
 *         - password
 *         - email
 *       properties:
 *         email:
 *           type: string
 *           description: email
 *         password:
 *           type: string
 *           description: password
 *       example:
 *         password: 12345aaa
 *         email: Azizxon@gmail.com
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log-in
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Log-in'
 *     responses:
 *       200:
 *         description: Log-in
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Log-in'
 *       500:
 *         description: Some server error
 */
