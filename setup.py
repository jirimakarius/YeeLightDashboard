from setuptools import setup, find_packages

setup(
    name='yeelight_dashboard',
    version='0.1.dev1',
    description='',
    author='Jiří Makarius',
    author_email='meadowfrey@gail.com',
    license='MIT',
    url='https://github.com/meadowfrey/YeeLightDashboard',
    packages=find_packages(),
    install_requires=['Flask', 'yeelight', 'flask_restful', 'flask-socketio', 'eventlet', 'zeroconf']
)