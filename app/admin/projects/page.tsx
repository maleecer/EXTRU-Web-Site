'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Plus, Edit, Trash2, Save } from 'lucide-react'

interface Project {
  id: number
  title: string
  association: string
  description: string
  fullDescription: string
  technologies: string[]
  team: string
  year: number
  image: string
}

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: 'AI-Powered Student Assistant',
      association: 'ATiT',
      description: 'Smart chatbot for student queries',
      fullDescription: 'An intelligent chatbot system powered by machine learning to help students with their academic queries, course information, and campus navigation.',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
      team: 'John Doe, Jane Smith, Mike Johnson',
      year: 2025,
      image: '/projects/ai-assistant.jpg'
    },
    {
      id: 2,
      title: 'Smart Energy Monitor',
      association: 'ASEET',
      description: 'IoT-based energy consumption tracker',
      fullDescription: 'An IoT system that monitors and optimizes energy consumption in buildings using sensors and data analytics.',
      technologies: ['Arduino', 'MQTT', 'React', 'Firebase'],
      team: 'Sarah Lee, David Chen, Emily White',
      year: 2025,
      image: '/projects/energy-monitor.jpg'
    }
  ])

  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<Project | null>(null)

  const associations = ['ATiT', 'ASEET', 'AMT', 'RUBIC', 'AFRU']

  const handleEdit = (project: Project) => {
    setEditingId(project.id)
    setEditForm({ ...project })
  }

  const handleSave = () => {
    if (editForm) {
      setProjects(projects.map(p => p.id === editForm.id ? editForm : p))
      setEditingId(null)
      setEditForm(null)
    }
  }

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id))
    }
  }

  const handleAddNew = () => {
    const newProject: Project = {
      id: Date.now(),
      title: 'New Project',
      association: 'ATiT',
      description: 'Project description',
      fullDescription: 'Full project description goes here',
      technologies: ['Technology 1', 'Technology 2'],
      team: 'Team Member 1, Team Member 2',
      year: 2026,
      image: '/placeholder.jpg'
    }
    setProjects([...projects, newProject])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05232e] via-[#001a33] to-[#05232e]">
      {/* Header */}
      <div className="border-b-2 border-primary/30 bg-[#001a33]/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-orbitron)' }}>
                PROJECTS MANAGEMENT
              </h1>
              <p className="text-gray-400 mt-1">Manage featured projects by association</p>
            </div>
            <Link 
              href="/admin"
              className="flex items-center gap-2 px-4 py-2 text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Add New Button */}
        <button
          onClick={handleAddNew}
          className="mb-8 flex items-center gap-2 px-6 py-3 bg-accent text-black font-bold rounded-lg hover:bg-accent/80 transition-all hover:shadow-[0_0_20px_rgba(124,255,114,0.6)]"
          style={{ fontFamily: 'var(--font-orbitron)' }}
        >
          <Plus className="w-5 h-5" />
          Add New Project
        </button>

        {/* Projects by Association */}
        {associations.map(association => {
          const assocProjects = projects.filter(p => p.association === association)
          if (assocProjects.length === 0) return null

          return (
            <div key={association} className="mb-12">
              <h2 className="text-2xl font-bold text-accent mb-6" style={{ fontFamily: 'var(--font-orbitron)' }}>
                {association} Projects
              </h2>
              <div className="grid gap-6">
                {assocProjects.map(project => (
                  <div
                    key={project.id}
                    className="bg-[#001a33]/50 border-2 border-accent/30 rounded-xl p-6 hover:border-accent/50 transition-all"
                  >
                    {editingId === project.id && editForm ? (
                      // Edit Mode
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-primary mb-2">Project Title</label>
                            <input
                              type="text"
                              value={editForm.title}
                              onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                              className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-primary mb-2">Association</label>
                            <select
                              value={editForm.association}
                              onChange={(e) => setEditForm({ ...editForm, association: e.target.value })}
                              className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                            >
                              {associations.map(assoc => (
                                <option key={assoc} value={assoc}>{assoc}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">Short Description</label>
                          <input
                            type="text"
                            value={editForm.description}
                            onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                            className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">Full Description</label>
                          <textarea
                            value={editForm.fullDescription}
                            onChange={(e) => setEditForm({ ...editForm, fullDescription: e.target.value })}
                            rows={4}
                            className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-primary mb-2">Technologies (comma separated)</label>
                            <input
                              type="text"
                              value={editForm.technologies.join(', ')}
                              onChange={(e) => setEditForm({ ...editForm, technologies: e.target.value.split(',').map(t => t.trim()) })}
                              className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-primary mb-2">Year</label>
                            <input
                              type="number"
                              value={editForm.year}
                              onChange={(e) => setEditForm({ ...editForm, year: Number(e.target.value) })}
                              className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">Team Members</label>
                          <input
                            type="text"
                            value={editForm.team}
                            onChange={(e) => setEditForm({ ...editForm, team: e.target.value })}
                            className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">Image URL</label>
                          <input
                            type="text"
                            value={editForm.image}
                            onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
                            className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                          />
                        </div>

                        <div className="flex gap-4 pt-4">
                          <button
                            onClick={handleSave}
                            className="flex items-center gap-2 px-6 py-2 bg-accent text-black font-bold rounded-lg hover:bg-accent/80 transition-all"
                          >
                            <Save className="w-4 h-4" />
                            Save Changes
                          </button>
                          <button
                            onClick={() => {
                              setEditingId(null)
                              setEditForm(null)
                            }}
                            className="px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700 transition-all"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      // View Mode
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
                            {project.title}
                          </h3>
                          <p className="text-accent text-sm font-bold mb-2">{project.association} • {project.year}</p>
                          <p className="text-gray-300 mb-3">{project.description}</p>
                          <p className="text-gray-400 text-sm mb-3">{project.fullDescription}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <p className="text-gray-500 text-sm">Team: {project.team}</p>
                          <p className="text-gray-500 text-sm mt-1">Image: {project.image}</p>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => handleEdit(project)}
                            className="p-3 bg-blue-500/20 text-blue-400 border-2 border-blue-500/50 rounded-lg hover:bg-blue-500/30 transition-all"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(project.id)}
                            className="p-3 bg-red-500/20 text-red-400 border-2 border-red-500/50 rounded-lg hover:bg-red-500/30 transition-all"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
