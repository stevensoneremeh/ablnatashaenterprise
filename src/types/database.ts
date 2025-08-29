export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          phone: string | null
          role: 'customer' | 'admin' | 'agent'
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name?: string | null
          phone?: string | null
          role?: 'customer' | 'admin' | 'agent'
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          phone?: string | null
          role?: 'customer' | 'admin' | 'agent'
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          image_url: string | null
          parent_id: string | null
          sort_order: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          image_url?: string | null
          parent_id?: string | null
          sort_order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          image_url?: string | null
          parent_id?: string | null
          sort_order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          title: string
          description: string | null
          price: number
          discounted_price: number | null
          category_id: string
          images: Json
          status: 'active' | 'inactive' | 'sold'
          location: string | null
          features: Json | null
          agent_id: string | null
          views: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          price: number
          discounted_price?: number | null
          category_id: string
          images?: Json
          status?: 'active' | 'inactive' | 'sold'
          location?: string | null
          features?: Json | null
          agent_id?: string | null
          views?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          price?: number
          discounted_price?: number | null
          category_id?: string
          images?: Json
          status?: 'active' | 'inactive' | 'sold'
          location?: string | null
          features?: Json | null
          agent_id?: string | null
          views?: number
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string
          total_amount: number
          status: 'pending' | 'confirmed' | 'processing' | 'completed' | 'cancelled'
          payment_status: 'pending' | 'paid' | 'failed' | 'refunded'
          payment_reference: string | null
          shipping_address: Json
          billing_address: Json
          items: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          total_amount: number
          status?: 'pending' | 'confirmed' | 'processing' | 'completed' | 'cancelled'
          payment_status?: 'pending' | 'paid' | 'failed' | 'refunded'
          payment_reference?: string | null
          shipping_address?: Json
          billing_address?: Json
          items?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          total_amount?: number
          status?: 'pending' | 'confirmed' | 'processing' | 'completed' | 'cancelled'
          payment_status?: 'pending' | 'paid' | 'failed' | 'refunded'
          payment_reference?: string | null
          shipping_address?: Json
          billing_address?: Json
          items?: Json
          created_at?: string
          updated_at?: string
        }
      }
      inquiries: {
        Row: {
          id: string
          user_id: string | null
          product_id: string
          name: string
          email: string
          phone: string | null
          message: string
          status: 'new' | 'contacted' | 'closed'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          product_id: string
          name: string
          email: string
          phone?: string | null
          message: string
          status?: 'new' | 'contacted' | 'closed'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          product_id?: string
          name?: string
          email?: string
          phone?: string | null
          message?: string
          status?: 'new' | 'contacted' | 'closed'
          created_at?: string
          updated_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          user_id: string
          product_id: string
          rating: number
          comment: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          rating: number
          comment?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          rating?: number
          comment?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
